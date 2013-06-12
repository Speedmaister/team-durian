/// <reference path="object.js" />
/// <reference path="jQuery-1.10.1.js" />
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

    this.figPosition = MatrixCols / 2;
    this.figure = figureNS.createRandomFigure();
    var that = this;

    // 32, 37 and 39 are the key codes coresponding to space, left arrow and right arrow
    $("body").keydown(function (event) {
        console.log("key press " + that.figPosition);
        if (event.which == 37 && that.figPosition > 0) {
            that.figPosition--;
        }
        if (event.which == 39 && that.figPosition + that.figure.form[0].length < MatrixCols) {
            that.figPosition++;
        }
        if (event.which == 32 && that.figPosition + that.figure.form.length + 1 < MatrixCols) {
            that.figure.rotate();
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
    
    function canFall(currentFigure, currentRowIndex, lastFigure, lastRowIndex, lastColIndex) {
        var row = 0;
        var col = 0;

        for (row = 0; row < lastFigure.length; row++) {
            for (col = 0; col < lastFigure[row].length; col++) {
                if (lastFigure[row][col]!=0) {
                    this.matrix[lastRowIndex + row][lastColIndex + col] = 0;
                }
            }
        }


        for (col = 0; col < currentFigure[0].length; col++) {
            row = currentFigure.length - 1;

            for (var i = row; i >= 0; i--) {
                if (currentFigure[i][col] != 0) {
                    row = i;
                    break;
                }
            }

            if (currentRowIndex + row + 1 >= MatrixRows || this.matrix[currentRowIndex + row + 1][this.figPosition + col] != 0) {
                for (row = 0; row < lastFigure.length; row++) {
                    for (col = 0; col < lastFigure[row].length; col++) {
                        if (lastFigure[row][col] != 0) {
                            this.matrix[lastRowIndex + row][lastColIndex + col] = lastFigure[row][col];
                        }
                    }
                }
                return false;
            }
        }
        return true;
    }

    (function dropFigure() {
        var row = 0;
        var col = 0;
        var currentRowIndex = 0;
        var lastRowIndex = currentRowIndex;
        var lastColIndex = this.figPosition;
        var lastFigure = copyFigure(this.figure.form);
        var currentFigure = copyFigure(this.figure.form);

        var intervalId = setInterval(function () {
            
            currentFigure = copyFigure(this.figure.form);

            if (canFall(currentFigure, currentRowIndex, lastFigure, lastRowIndex, lastColIndex)) {
                currentRowIndex++;
                for (row = 0; row < currentFigure.length; row++) {
                    for (col = 0; col < currentFigure[row].length; col++) {
                        if (currentFigure[row][col] != 0) {
                            this.matrix[currentRowIndex + row][this.figPosition + col] = currentFigure[row][col];
                        }
                    }
                }

                lastColIndex = this.figPosition;
                lastRowIndex = currentRowIndex;
                lastFigure = copyFigure(this.figure.form);
                renderMatrix(this.matrix, this.table);
            }
            else {
                clearInterval(intervalId);
                //TODO: line check and score update goes here
                this.figure = figureNS.createRandomFigure();
                this.figPosition = MatrixCols / 2;
                if (currentRowIndex == 0) {
                    console.log("Game Over");
                } else {
                    dropFigure();
                }
            }
        }, 300)
    })();



    this.nextFigureMatrix = [];
    var currentFigure = figureNS.createRandomFigure();
    initializeMatrix(this.nextFigureMatrix, MatrixNextFigureRows, MatrixNextFigureCols);  
    this.nextFigTablle = $("<table>");
    var leftPoint = (this.nextFigureMatrix[0].length - currentFigure.form[0].length) / 2 | 0;
    var topPoint = (this.nextFigureMatrix.length - currentFigure.form.length) / 2 | 0;
    for (var i = 0; i < currentFigure.form.length; i++) {
        for (var j = 0; j < currentFigure.form[i].length; j++) {
            this.nextFigureMatrix[i+topPoint][j+ leftPoint] = currentFigure.form[i][j];
        }
    }

    initializeTable(this.nextFigTablle, MatrixNextFigureRows, MatrixNextFigureCols);
    renderMatrix(this.nextFigureMatrix, this.nextFigTablle);

    this.nextFigureContainer.append(this.nextFigTablle);

    function clearCells(table) {
        $("td",table).css("background-color", "white");
    }

    function renderMatrix(matrix, table) {
        clearCells(table);
        var i;
        var j;
        for (i = 0; i < matrix.length; i++) {
            for (j = 0; j < matrix[0].length; j++) {
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