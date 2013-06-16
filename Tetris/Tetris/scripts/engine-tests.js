/// <reference path="engine.js" />
describe("engine", function () {
    describe("initializeMatrix", function () {
        it("initialize matrix 1x1", function () {
            var matrix = [];
            var height = 1;
            var width = 1;
            Engine.initializeMatrix(matrix, height, width );
            expect(matrix.length).toBe(height);
            expect(matrix[0].length).toBe(width);
        });
        it("initialize matrix 8x8", function () {
            var matrix = [];
            var height = 8;
            var width = 8;
            Engine.initializeMatrix(matrix, height, width);
            expect(matrix.length).toBe(height);
            expect(matrix[0].length).toBe(width);
        });

        it("initialize matrix 20x10", function () {
            var matrix = [];
            var height = 20;
            var width = 10;
            Engine.initializeMatrix(matrix, height, width);
            expect(matrix.length).toBe(height);
            expect(matrix[0].length).toBe(width);
        });

        it("initialize with all cells equal 0", function () {
            var matrix = [];
            var height = 20;
            var width = 10;
            Engine.initializeMatrix(matrix, height, width);
            for (var row = 0; row < matrix.length; row++) {
                for (var col = 0; col < matrix[row].length; col++) {
                    expect(matrix[row][col]).toBe(0);
                }
            }
        });
    });
    
    describe("copyFigure", function () {
        it("copy single cell figure", function () {
            var figure = [["1"]];
            var copy = Engine.copyFigure(figure);

            expect(copy.length).toBe(figure.length);
            expect(copy[0].length).toBe(figure[0].length);
            expect(copy).toEqual(figure);
            expect(copy).not.toBe(figure);
        });

        it("copy figureL", function () {
            var figure = [[0, 0, "L"], ["L", "L", "L"]];;
            var copy = Engine.copyFigure(figure);

            expect(copy.length).toBe(figure.length);
            expect(copy[0].length).toBe(figure[0].length);
            expect(copy).toEqual(figure);
            expect(copy).not.toBe(figure);
        });

        it("copy pyramid form", function () {
            var figure = [[0], ["L", 0, "L"], ["S", 0, "T", 0, "Z"], ["S", 0, "Z", 0, "X", 0, "S", 0, "Z"]];
            var copy = Engine.copyFigure(figure);

            expect(copy.length).toBe(figure.length);
            for (var row = 0; row < figure.length; row++) {
                expect(copy[row].length).toBe(figure[row].length);
            }

            expect(copy).toEqual(figure);
            expect(copy).not.toBe(figure);
        });
    });

    describe("placeFigureOnMatrix", function () {
        it("place single cell in center of 5x5 matrix", function () {
            var row = 2;
            var col = 2;
            var figure = [["X"]];
            var matrix =
                [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];
            var expected =
                [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, "X", 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];

            Engine.placeFigureOnMatrix(matrix, figure, row, col);

            expect(matrix).toEqual(expected);
        });

        it("place figureI in the top left of 5x5 matrix", function () {
            var row = 0;
            var col = 0;
            var figure = [["I", "I", "I", "I"]];
            var matrix =
                [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];
            var expected =
                [["I", "I", "I", "I", 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];

            Engine.placeFigureOnMatrix(matrix, figure, row, col);

            expect(matrix).toEqual(expected);
        });

        it("place figureO cell in the bottom righ of 5x5 matrix", function () {
            var row = 3;
            var col = 3;
            var figure = [["O", "O"], ["O", "O"]];
            var matrix =
                [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];
            var expected =
                [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, "O", "O"],
                [0, 0, 0, "O", "O"]];

            Engine.placeFigureOnMatrix(matrix, figure, row, col);

            expect(matrix).toEqual(expected);
        });
    });

    describe("removeFigureFromMatrix", function () {
        it("remove single cell from center of 5x5 matrix", function () {
            var row = 2;
            var col = 2;
            var figure = [["X"]];
            var matrix =
                 [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, "X", 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];
            var expected =
                [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];

            Engine.removeFigureFromMatrix(matrix, figure, row, col);

            expect(matrix).toEqual(expected);
        });

        it("remove single cell from center of a cross in 5x5 matrix", function () {
            var row = 2;
            var col = 2;
            var figure = [["X"]];
            var matrix =
                 [[0, 0, 0, 0, 0],
                [0, 0, "X", 0, 0],
                [0, "X", "X", "X", 0],
                [0, 0, "X", 0, 0],
                [0, 0, 0, 0, 0]];
            var expected =
                [[0, 0, 0, 0, 0],
                [0, 0, "X", 0, 0],
                [0, "X", 0, "X", 0],
                [0, 0, "X", 0, 0],
                [0, 0, 0, 0, 0]];

            Engine.removeFigureFromMatrix(matrix, figure, row, col);

            expect(matrix).toEqual(expected);
        });

        it("remove figureI from the top left of 5x5 matrix", function () {
            var row = 0;
            var col = 0;
            var figure = [["I", "I", "I", "I"]];
            var matrix = [["I", "I", "I", "I", 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];
            var expected =

                [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];

            Engine.removeFigureFromMatrix(matrix, figure, row, col);

            expect(matrix).toEqual(expected);
        });

        it("remove figureO cell in the bottom righ of 5x5 matrix", function () {
            var row = 3;
            var col = 3;
            var figure = [["O", "O"], ["O", "O"]];
            var matrix =
                 [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, "O", "O"],
                [0, 0, 0, "O", "O"]];
            var expected =
                [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];

            Engine.removeFigureFromMatrix(matrix, figure, row, col);

            expect(matrix).toEqual(expected);
        });
    });
});