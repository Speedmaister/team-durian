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
                td.addClass("empty");
                td.appendTo(tr);
            }

            tr.appendTo(table);
        }
    }

    (function dropFigure() {
        var figure = figureNS.createFigureT();
        figure.rotate();
        var figPosition = MatrixCols / 2;
        var row = 0;
        var col = 0;

        // set figure in the top middle of the matrix
        for (row = 0; row < figure.length; row++) {
            for (col = 0; col < figure[row].length; col++) {
                this.matrix[row][figPosition + col];
            }
        }


        setInterval(function () {

            
        }, 1000);
    })();

    this.nextFigureMatrix = [];
    initializeMatrix(this.nextFigureMatrix, MatrixNextFigureRows, MatrixNextFigureCols);
    this.nextFigTablle = $("<table>");
    initializeTable(this.nextFigTablle, MatrixNextFigureRows, MatrixNextFigureCols);
    this.nextFigureContainer.append(this.nextFigTablle);

    function generateRandomFigure() {
        var randomIndex = Math.random() * 7 | 0;
        switch (randomIndex) {
            case 0: return figureNS.createFigureI();
            case 1: return figureNS.createFigureJ();
            case 2: return figureNS.createFigureL();
            case 3: return figureNS.createFigureT();
            case 4: return figureNS.createFigureO();
            case 5: return figureNS.createFigureS();
            case 6: return figureNS.createFigureZ();
            default: throw { message: "Cannot generate random figure" };
        }
    }
})()