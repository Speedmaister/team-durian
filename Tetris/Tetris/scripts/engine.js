/// <reference path="jQuery-1.10.1.js" />
/// <reference path="object.js" />
/// <reference path="script.js" />
// TODO Game Engine
var Engine = (function () {

    //Constants
    var MatrixRows = 20;
    var MatrixCols = 10;
    var MatrixNextFigureRows = 5;
    var MatrixNextFigureCols = 5;

    this.container = $("#container");
    this.tableContainer = $("<div>");
    this.tableContainer.attr("id", "tableContainer");
    this.statsContainer = $("<ul>");
    this.statsContainer.attr("id", "statsContainer");

    this.nextFigureContainer = $("<li>");
    this.nextFigureContainer.attr("id", "nextFigureContainer");
    this.scoreContainer = $("<li>");
    this.scoreContainer.attr("id", "scoreContainer");
    this.levelContainer = $("<li>");
    this.levelContainer.attr("id", "levelContainer");

    this.statsContainer.append(this.nextFigureContainer, this.scoreContainer, this.levelContainer);
    this.container.append(this.tableContainer, this.statsContainer);

    this.matrix = [];
    initializeMatrix(this.matrix, MatrixRows, MatrixCols);

    this.table = $("<table>");
    initializeTable(this.table, MatrixRows, MatrixCols);
    this.tableContainer.append(this.table);

    this.nextFigureMatrix = [];
    initializeMatrix(this.nextFigureMatrix, MatrixNextFigureRows, MatrixNextFigureCols);

    this.nextFigTablle = $("<table>");
    initializeTable(this.nextFigTablle, MatrixNextFigureRows, MatrixNextFigureCols);
    this.nextFigureContainer.append(this.nextFigTablle);

    this.figPosition = MatrixCols / 2;
    this.currentRowIndex = 0;
    this.nextFigure = figureNS.createRandomFigure();
    this.currentFigure;
    this.score = 0;
    var that = this;
    var speed = 300;
    var gameOver = false;

    function initializeMatrix(matrix, rows, cols) {
        var i;
        for (i = 0; i < rows; i++) {
            matrix.push([]);
            for (var j = 0; j < cols; j++) {
                matrix[i].push(0);
            }
        }
    }

    function initializeTable(table, rows, cols) {
        var i, j;
        for (i = 0; i < rows; i++) {
            var tr = $("<tr>");
            for (j = 0; j < cols; j++) {
                var td = $("<td>");
                td.appendTo(tr);
            }

            tr.appendTo(table);
        }
    }

    // 32, 37 and 39 are the key codes corresponding to space, left arrow and right arrow
    $("body").keydown(function (event) {
        if (event.which == 37 && canMoveLeft()) {
            that.figPosition--;
        } else {
            return;
        }
    });

    $("body").keydown(function (event) {
        if (event.which == 39 && canMoveRight()) {
            that.figPosition++;
        } else {
            return;
        }
    });

    $("body").keydown(function (event) {
        if (event.which == 32 && canRotate()) {
            that.currentFigure.rotate();
        } else {
            return;
        }
    });

    function copyFigure(fig) {
        var copyFig = [];
        for (var i = 0; i < fig.length; i++) {
            copyFig.push([]);
            for (var j = 0; j < fig[i].length; j++) {
                copyFig[i][j] = fig[i][j];
            }
        }

        return copyFig;
    }

    function canMoveLeft() {
        var canMoveLeft = true;
        if (this.figPosition > 0) {
            for (var i = 0; i < this.currentFigure.form.length; i++) {
                if (this.matrix[i + this.currentRowIndex][that.figPosition - 1] != 0 && this.currentFigure.form[i][0] != 0) {
                    canMoveLeft = false;
                }
            }
        }
        else {
            canMoveLeft = false;
        }

        return canMoveLeft;
    }

    function canMoveRight() {
        var canMoveRight = true;
        if (that.figPosition + that.currentFigure.form[0].length < MatrixCols) {
            var lastIndex = this.currentFigure.form[0].length - 1;
            for (var i = 0; i < this.currentFigure.form.length; i++) {
                if (this.matrix[i + this.currentRowIndex][that.figPosition + lastIndex + 1] != 0
                    && this.currentFigure.form[i][lastIndex] != 0) {
                    canMoveRight = false;
                }
            }
        }
        else {
            canMoveRight = false;
        }

        return canMoveRight;
    }

    function canRotate() {
        removeFigureFromMatrix(this.currentFigure.form, this.currentRowIndex, this.figPosition);
        var rotatedFigure = {};
        jQuery.extend(rotatedFigure, this.currentFigure);
        rotatedFigure.rotate();
        var hasColision = !canFall(rotatedFigure.form);

        return this.figPosition + rotatedFigure.form.length - 1 < MatrixCols && !hasColision;

    }

    function canFall(currentFigure) {
        var row = 0;
        var col = 0;

        for (col = 0; col < currentFigure[0].length; col++) {
            for (row = currentFigure.length - 1; row >= 0; row--) {
                var isEmpty = currentFigure[row][col] == 0;
                var isOutsideMatrix = this.currentRowIndex + row + 1 >= MatrixRows;
                if (!isEmpty && (isOutsideMatrix || this.matrix[this.currentRowIndex + row + 1][this.figPosition + col] != 0)) {
                    return false;
                }
            }
        }
        return true;
    }

    function removeFigureFromMatrix(figure, top, left) {
        var row = 0;
        var col = 0;
        for (row = 0; row < figure.length; row++) {
            for (col = 0; col < figure[row].length; col++) {
                if (figure[row][col] != 0) {
                    this.matrix[top + row][left + col] = 0;
                }
            }
        }
    }

    function placeFigureOnMatrix(figure, top, left) {
        var row = 0;
        var col = 0;
        for (row = 0; row < figure.length; row++) {
            for (col = 0; col < figure[row].length; col++) {
                if (figure[row][col] != 0) {
                    this.matrix[top + row][left + col] = figure[row][col];
                }
            }
        }
    }

    (function dropFigure() {
        this.scoreContainer.text("Score: " + this.score);
        this.currentFigure = this.nextFigure;
        this.nextFigure = figureNS.createRandomFigure();
        rotateAtRandom(this.nextFigure);
        loadNextFigure();
        this.currentRowIndex = 0;
        var lastRowIndex = this.currentRowIndex;
        var lastColIndex = this.figPosition;
        var lastFigure = copyFigure(this.currentFigure.form);
        var currentFigure = copyFigure(this.currentFigure.form);


        intervalId = setInterval(GameLoop, speed);

        function GameLoop() {
            currentFigure = copyFigure(this.currentFigure.form);
            removeFigureFromMatrix(lastFigure, lastRowIndex, lastColIndex);
            if (canFall(currentFigure)) {
                this.currentRowIndex++;

                placeFigureOnMatrix(currentFigure, this.currentRowIndex, this.figPosition);

                lastColIndex = this.figPosition;
                lastRowIndex = this.currentRowIndex;
                lastFigure = copyFigure(this.currentFigure.form);
                renderMatrix(this.matrix, this.table);
            } else {
                placeFigureOnMatrix(currentFigure, lastRowIndex, lastColIndex);
                clearInterval(intervalId);
                this.currentFigure = this.nextFigure;
                this.figPosition = MatrixCols / 2;
                if (this.currentRowIndex == 0) {
                    console.log("Game Over");
                    renderMatrix(this.matrix, this.table);
                    TetrisStorage._checkCurrentScore(score);
                    gameOver = true;


                } else {
                    checkFullForRows();
                    dropFigure();
                }
            }
        }

        $("body").keydown(function (event) {
            if (event.which == 40) {
                if (gameOver) {
                    return;
                }
                event.preventDefault();
                clearInterval(intervalId);
                intervalId = setInterval(GameLoop, 50);
            }
            else {
                return;
            }
        });
    })();

    function checkFullForRows() {
        var row = 0;
        var col = 0;
        var blockCount = 0;
        var fullRowsCount = 0;
        var cleanUpIndexes = [];

        for (row = 0; row < this.matrix.length; row++) {
            blockCount = 0;
            for (col = 0; col < this.matrix[row].length; col++) {
                if (this.matrix[row][col] != 0) {
                    blockCount++;
                }
            }

            if (blockCount == this.matrix[row].length) {
                fullRowsCount++;
                cleanUpIndexes.push(row);
            }
        }

        if (fullRowsCount > 0) {
            cleanUpRows(cleanUpIndexes);
            switch (fullRowsCount) {
                case 1:
                    this.score += fullRowsCount * 100;
                    break;
                case 2:
                    this.score += fullRowsCount * 120;
                    break;
                case 3:
                    this.score += fullRowsCount * 160;
                    break;
                case 4:
                    this.score += fullRowsCount * 200;
                    break;
            }

            console.log("score : " + this.score);
            console.log("indexes : " + cleanUpIndexes);
        }
    }

    function cleanUpRows(cleanUpIndexes) {
        var i = 0;
        var row = 0;
        var col = 0;
        for (i = 0; i < cleanUpIndexes.length; i++) {
            row = cleanUpIndexes[i];
            for (col = 0; col < this.matrix[row].length; col++) {
                this.matrix[row][col] = 0;
            }

            matrixFallDown(row);
        }
    }

    function matrixFallDown(index) {
        var row = 0;
        var col = 0;

        for (row = index; row > 0; row--) {
            this.matrix[row] = this.matrix[row - 1]
        }

        var topRow = [];
        for (col = 0; col < this.matrix[0].length; col++) {
            topRow.push(0);
        }

        this.matrix[0] = topRow;
    }


    function rotateAtRandom(figure) {
        var randomCount = Math.random() * 4 | 0;
        for (var i = 0; i < randomCount; i++) {
            figure.rotate();
        }
    }


    function loadNextFigure() {
        var i, j;
        var leftPoint = (this.nextFigureMatrix[0].length - this.nextFigure.form[0].length) / 2 | 0;
        var topPoint = (this.nextFigureMatrix.length - this.nextFigure.form.length) / 2 | 0;

        for (i = 0; i < this.nextFigureMatrix.length; i++) {
            for (j = 0; j < this.nextFigureMatrix[i].length; j++) {
                this.nextFigureMatrix[i][j] = "0";
            }
        }

        for (i = 0; i < this.nextFigure.form.length; i++) {
            for (j = 0; j < this.nextFigure.form[i].length; j++) {
                this.nextFigureMatrix[i + topPoint][j + leftPoint] = this.nextFigure.form[i][j];
            }
        }

        renderMatrix(this.nextFigureMatrix, this.nextFigTablle);
    }

    function clearCells(table) {
        var tds = $("td", table);
        tds.css("background-color", "white");
    }

    function renderMatrix(matrix, table) {
        clearCells(table);
        var i;
        var j;
        for (i = 0; i < matrix.length; i++) {
            for (j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] != '0') {
                    var currentTd = table.children()[0].childNodes[i].childNodes[j];
                    changeTdColor(currentTd, matrix[i][j]);
                }
            }
        }
    }

    function changeTdColor(td, color) {
        td = $(td);
        switch (color) {
            case 'I':
                td.css("background-color", "lightblue");
                break;
            case 'J':
                td.css("background-color", "blue");
                break;
            case 'L':
                td.css("background-color", "orange");
                break;
            case 'O':
                td.css("background-color", "yellow");
                break;
            case 'S':
                td.css("background-color", "green");
                break;
            case 'T':
                td.css("background-color", "purple");
                break;
            case 'Z':
                td.css("background-color", "red");
                break;
        }
    }
})()