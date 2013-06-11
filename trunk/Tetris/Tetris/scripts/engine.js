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

    this.container.append(this.tableContainer,this.statsContainer);

    this.matrix = [];
    initializeMatrix(this.matrix,MatrixRows,MatrixCols);

    this.table = $("<table>");
    initializeTable(this.table,MatrixRows,MatrixCols);
    this.tableContainer.append(this.table);

    function initializeMatrix(matrix,rows,cols) {
        var i;
        for (i = 0; i < rows; i++) {
            matrix.push([]);
            for (var j = 0; j < cols; j++) {
                matrix[i].push(0);
            }
        }
    }

    function initializeTable(table,rows,cols) {
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

   function dropFigure() {
       var I = figureNS.createFigureI();
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
    //this.nextFigureMatrix = [];
    //initializeMatrix(this.nextFigureContainer,)

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