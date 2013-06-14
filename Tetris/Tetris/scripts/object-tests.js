/// <reference path="object.js" />
describe("object", function () {
    describe("createFigureI", function () {
        it("initialize figureI", function () {
            var figureI = figureNS.createFigureI();
            var expected = [["I", "I", "I", "I"]];
            var actual = figureI.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureI one time", function () {
            var figureI = figureNS.createFigureI();
            figureI.rotate();
            var expected = [["I"], ["I"], ["I"], ["I"]];
            var actual = figureI.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureI two times", function () {
            var figureI = figureNS.createFigureI();
            var rotationCount = 2;
            for (var i = 0; i < rotationCount; i++) {
                figureI.rotate();
            }
            var expected = [["I", "I", "I", "I"]];
            var actual = figureI.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureI three times", function () {
            var figureI = figureNS.createFigureI();
            var rotationCount = 3;
            for (var i = 0; i < rotationCount; i++) {
                figureI.rotate();
            }
            var expected = [["I"], ["I"], ["I"], ["I"]];
            var actual = figureI.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureI four times", function () {
            var figureI = figureNS.createFigureI();
            var rotationCount = 4;
            for (var i = 0; i < rotationCount; i++) {
                figureI.rotate();
            }
            var expected = [["I", "I", "I", "I"]];
            var actual = figureI.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureI 15 times", function () {
            var figureI = figureNS.createFigureI();
            var i = 0;
            var rotationCount = 15;
            for (i = 0; i < rotationCount; i++) {
                figureI.rotate();
            }
            var expected = [["I"], ["I"], ["I"], ["I"]];
            var actual = figureI.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureI 16 times", function () {
            var figureI = figureNS.createFigureI();
            var i = 0;
            var rotationCount = 16;
            for (i = 0; i < rotationCount; i++) {
                figureI.rotate();
            }
            var expected = [["I", "I", "I", "I"]];
            var actual = figureI.form;
            expect(actual).toEqual(expected);
        });
    });

    describe("createFigureT", function () {
        it("initialize figureT", function () {
            var figureT = figureNS.createFigureT();
            var expected = [[0, "T", 0], ["T", "T", "T"]];
            var actual = figureT.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureT one time", function () {
            var figureT = figureNS.createFigureT();
            figureT.rotate();
            var expected = [["T", 0],["T", "T"],["T",0]];
            var actual = figureT.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureT two times", function () {
            var figureT = figureNS.createFigureT();
            var rotationCount = 2;
            for (var i = 0; i < rotationCount; i++) {
                figureT.rotate();
            }
            var expected = [["T", "T", "T"], [0, "T", 0]];
            var actual = figureT.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureT three times", function () {
            var figureT = figureNS.createFigureT();
            var rotationCount = 3;
            for (var i = 0; i < rotationCount; i++) {
                figureT.rotate();
            }
            var expected = [[0, "T"], ["T", "T"], [0, "T"]];
            var actual = figureT.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureT four times", function () {
            var figureT = figureNS.createFigureT();
            var rotationCount = 4;
            for (var i = 0; i < rotationCount; i++) {
                figureT.rotate();
            }
            var expected = [[0, "T", 0], ["T", "T", "T"]];
            var actual = figureT.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureT 15 times", function () {
            var figureT = figureNS.createFigureT();
            var rotationCount = 15;
            for (var i = 0; i < rotationCount; i++) {
                figureT.rotate();
            }
            var expected = [[0, "T"], ["T", "T"], [0, "T"]];
            var actual = figureT.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureT 16 times", function () {
            var figureT = figureNS.createFigureT();
            var rotationCount = 16;
            for (var i = 0; i < rotationCount; i++) {
                figureT.rotate();
            }
            var expected = [[0, "T", 0], ["T", "T", "T"]];
            var actual = figureT.form;
            expect(actual).toEqual(expected);
        });
    });
});