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

    (function dropFigure() {
        var figure = figureNS.createRandomFigure();
        figure.rotate();
        var figPosition = MatrixCols / 2;
        var row = 0;
        var col = 0;

        var currentRow = 0;
        var intervalId = setInterval(function () {

            if (figure.form.length + currentRow < MatrixRows) {
                for (row = 0; row < figure.form.length; row++) {
                    for (col = 0; col < figure.form[row].length; col++) {
                        this.matrix[currentRow + row][figPosition + col] = 0;
                    }
                }

                currentRow++;
                for (row = figure.form.length - 1; row >= 0; row--) {
                    for (col = figure.form[row].length - 1; col >= 0; col--) {
                        if (figure.form[row][col] != 0) {
                            this.matrix[currentRow + row][figPosition + col] = figure.form[row][col];
                        }
                    }
                }

                renderMatrix(this.matrix, this.table);
            }
            else {
                clearInterval(intervalId);
                dropFigure();
            }
        }, 10)
    })();

    this.nextFigureMatrix = [];

    var currentFigure = figureNS.createRandomFigure();
    initializeMatrix(this.nextFigureMatrix, MatrixNextFigureRows, MatrixNextFigureCols);  
    this.nextFigTablle = $("<table>");
    var topLeft = [(this.nextFigureMatrix[0].length - currentFigure.form[0].length) / 2 | 0,
        (this.nextFigureMatrix.length - currentFigure.form.length) / 2 | 0];
    for (var i = 0; i < currentFigure.form.length; i++) {
        for (var j = 0; j < currentFigure.form[i].length; j++) {
            this.nextFigureMatrix[i+topLeft[1]][j+ topLeft[0]] = currentFigure.form[i][j];
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