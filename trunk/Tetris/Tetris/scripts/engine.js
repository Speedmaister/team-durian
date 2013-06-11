/// <reference path="object.js" />
/// <reference path="jQuery-1.10.1.js" />
// TODO Game Engine
var Engine = (function () {

    //Constants
    var MatrixRows = 20;
    var MatrixCols = 10;

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

    this.container.append(this.tableContainer,this.statsContainer);

    this.matrix = [];
    initializeMatrix(this.matrix);

    this.table = $("<table>");
    initializeTable(this.table);
    this.tableContainer.append(this.table);

    function initializeMatrix(matrix) {
        var i;
        for (i = 0; i < MatrixRows; i++) {
            matrix.push([]);
        }
    }

    function initializeTable(table) {
        var i, j;
        for (i = 0; i < MatrixRows; i++) {
            var tr = $("<tr>");
            for (j = 0; j < MatrixCols; j++) {
                var td = $("<td>");
                td.addClass("empty");
                td.appendTo(tr);
            }

            tr.appendTo(table);
        }
    }

    function dropFigure() {
        var I = new figureNS.I();
        for (var i = 0; i < I.form[0].length; i++) {
            this.matrix[0][i] = I.form[0][i];
        }
        var i = 0;
        setInterval(function () {
            for (var j = 0; j < this.matrix[0].length; j++) {
                this.matrix[i + 1][j] = this.matrix[i][j];
                this.matrix[i][j] = 0;
            }
        }, 1000);
    }
})()