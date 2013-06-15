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

    describe("createFigureJ", function () {
        it("initialize figureJ", function () {
            var figureJ = figureNS.createFigureJ();
            var expected = [["J", 0, 0], ["J", "J", "J"]];
            var actual = figureJ.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureJ one time", function () {
            var figureJ = figureNS.createFigureJ();
            figureJ.rotate();
            var expected = [["J", "J"], ["J", 0], ["J", 0]];
            var actual = figureJ.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureJ two times", function () {
            var figureJ = figureNS.createFigureJ();
            var rotationCount = 2;
            for (var i = 0; i < rotationCount; i++) {
                figureJ.rotate();
            }
            var expected = [["J", "J", "J"], [0, 0, "J"]];
            var actual = figureJ.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureJ three times", function () {
            var figureJ = figureNS.createFigureJ();
            var rotationCount = 3;
            for (var i = 0; i < rotationCount; i++) {
                figureJ.rotate();
            }
            var expected = [[0,"J"], [0,"J"], ["J", "J"]];
            var actual = figureJ.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureJ four times", function () {
            var figureJ = figureNS.createFigureJ();
            var rotationCount = 4;
            for (var i = 0; i < rotationCount; i++) {
                figureJ.rotate();
            }
            var expected = [["J", 0, 0], ["J", "J", "J"]];
            var actual = figureJ.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureJ 15 times", function () {
            var figureJ = figureNS.createFigureJ();
            var rotationCount = 15;
            for (var i = 0; i < rotationCount; i++) {
                figureJ.rotate();
            }
            var expected = [[0, "J"], [0, "J"], ["J", "J"]];
            var actual = figureJ.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureJ 16 times", function () {
            var figureJ = figureNS.createFigureJ();
            var rotationCount = 16;
            for (var i = 0; i < rotationCount; i++) {
                figureJ.rotate();
            }
            var expected = [["J", 0, 0], ["J", "J", "J"]];
            var actual = figureJ.form;
            expect(actual).toEqual(expected);
        });
    });

    describe("createFigureL", function () {
        it("initialize figureL", function () {
            var figureL = figureNS.createFigureL();
            var expected = [[0, 0, "L"], ["L", "L", "L"]];
            var actual = figureL.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureL one time", function () {
            var figureL = figureNS.createFigureL();
            figureL.rotate();
            var expected = [["L", 0], ["L", 0], ["L", "L"]];
            var actual = figureL.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureL two times", function () {
            var figureL = figureNS.createFigureL();
            var rotationCount = 2;
            for (var i = 0; i < rotationCount; i++) {
                figureL.rotate();
            }
            var expected = [["L", "L", "L"], ["L", 0, 0]];
            var actual = figureL.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureL three times", function () {
            var figureL = figureNS.createFigureL();
            var rotationCount = 3;
            for (var i = 0; i < rotationCount; i++) {
                figureL.rotate();
            }
            var expected = [["L", "L"], [0, "L"], [0, "L"]];
            var actual = figureL.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureL four times", function () {
            var figureL = figureNS.createFigureL();
            var rotationCount = 4;
            for (var i = 0; i < rotationCount; i++) {
                figureL.rotate();
            }
            var expected = [[0, 0, "L"], ["L", "L", "L"]];
            var actual = figureL.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureL 15 times", function () {
            var figureL = figureNS.createFigureL();
            var rotationCount = 15;
            for (var i = 0; i < rotationCount; i++) {
                figureL.rotate();
            }
            var expected = [["L", "L"], [0, "L"], [0, "L"]];
            var actual = figureL.form;
            expect(actual).toEqual(expected);
        });


        it("rotate figureL 16 times", function () {
            var figureL = figureNS.createFigureL();
            var rotationCount = 16;
            for (var i = 0; i < rotationCount; i++) {
                figureL.rotate();
            }
            var expected = [[0, 0, "L"], ["L", "L", "L"]];
            var actual = figureL.form;
            expect(actual).toEqual(expected);
        });
    });

    describe("createFigureS", function () {
        it("initialize figureS", function () {
            var figureS = figureNS.createFigureS();
            var expected = [[0, "S", "S"], ["S", "S", 0]];
            var actual = figureS.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureS one time", function () {
            var figureS = figureNS.createFigureS();
            figureS.rotate();
            var expected = [["S", 0], ["S", "S"], [0,"S"]];
            var actual = figureS.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureS two times", function () {
            var figureS = figureNS.createFigureS();
            var rotationCount = 2;
            for (var i = 0; i < rotationCount; i++) {
                figureS.rotate();
            }
            var expected = [[0, "S", "S"], ["S", "S", 0]];
            var actual = figureS.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureS three times", function () {
            var figureS = figureNS.createFigureS();
            var rotationCount = 3;
            for (var i = 0; i < rotationCount; i++) {
                figureS.rotate();
            }
            var expected = [["S", 0], ["S", "S"], [0, "S"]];
            var actual = figureS.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureS four times", function () {
            var figureS = figureNS.createFigureS();
            var rotationCount = 4;
            for (var i = 0; i < rotationCount; i++) {
                figureS.rotate();
            }
            var expected = [[0, "S", "S"], ["S", "S", 0]];
            var actual = figureS.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureS 15 times", function () {
            var figureS = figureNS.createFigureS();
            var rotationCount = 15;
            for (var i = 0; i < rotationCount; i++) {
                figureS.rotate();
            }
            var expected = [["S", 0], ["S", "S"], [0, "S"]];
            var actual = figureS.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureS 16 times", function () {
            var figureS = figureNS.createFigureS();
            var rotationCount = 16;
            for (var i = 0; i < rotationCount; i++) {
                figureS.rotate();
            }
            var expected = [[0, "S", "S"], ["S", "S", 0]];
            var actual = figureS.form;
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

    describe("createFigureO", function () {
        it("initialize figureO", function () {
            var figureO = figureNS.createFigureO();
            var expected = [["O", "O"], ["O", "O"]];
            var actual = figureO.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureO one time", function () {
            var figureO = figureNS.createFigureO();
            figureO.rotate();
            var expected = [["O", "O"], ["O", "O"]];
            var actual = figureO.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureO two times", function () {
            var figureO = figureNS.createFigureO();
            var rotationCount = 2;
            for (var i = 0; i < rotationCount; i++) {
                figureO.rotate();
            }
            var expected = [["O", "O"], ["O", "O"]];
            var actual = figureO.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureO three times", function () {
            var figureO = figureNS.createFigureO();
            var rotationCount = 3;
            for (var i = 0; i < rotationCount; i++) {
                figureO.rotate();
            }
            var expected = [["O", "O"], ["O", "O"]];
            var actual = figureO.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureO four times", function () {
            var figureO = figureNS.createFigureO();
            var rotationCount = 4;
            for (var i = 0; i < rotationCount; i++) {
                figureO.rotate();
            }
            var expected = [["O", "O"], ["O", "O"]];
            var actual = figureO.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureO 15 times", function () {
            var figureO = figureNS.createFigureO();
            var rotationCount = 15;
            for (var i = 0; i < rotationCount; i++) {
                figureO.rotate();
            }
            var expected = [["O", "O"], ["O", "O"]];
            var actual = figureO.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureO 16 times", function () {
            var figureO = figureNS.createFigureO();
            var rotationCount = 16;
            for (var i = 0; i < rotationCount; i++) {
                figureO.rotate();
            }
            var expected = [["O", "O"], ["O", "O"]];
            var actual = figureO.form;
            expect(actual).toEqual(expected);
        });
    });

    describe("createFigureZ", function () {
        it("initialize figureZ", function () {
            var figureZ = figureNS.createFigureZ();
            var expected = [["Z", "Z", 0], [0, "Z", "Z"]];
            var actual = figureZ.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureZ one time", function () {
            var figureZ = figureNS.createFigureZ();
            figureZ.rotate();
            var expected = [[0, "Z"], ["Z", "Z"], ["Z", 0]];
            var actual = figureZ.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureZ two times", function () {
            var figureZ = figureNS.createFigureZ();
            var rotationCount = 2;
            for (var i = 0; i < rotationCount; i++) {
                figureZ.rotate();
            }
            var expected = [["Z", "Z", 0], [0, "Z", "Z"]];
            var actual = figureZ.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureZ three times", function () {
            var figureZ = figureNS.createFigureZ();
            var rotationCount = 3;
            for (var i = 0; i < rotationCount; i++) {
                figureZ.rotate();
            }
            var expected = [[0, "Z"], ["Z", "Z"], ["Z", 0]];
            var actual = figureZ.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureZ four times", function () {
            var figureZ = figureNS.createFigureZ();
            var rotationCount = 4;
            for (var i = 0; i < rotationCount; i++) {
                figureZ.rotate();
            }
            var expected = [["Z", "Z", 0], [0, "Z", "Z"]];
            var actual = figureZ.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureZ 15 times", function () {
            var figureZ = figureNS.createFigureZ();
            var rotationCount = 15;
            for (var i = 0; i < rotationCount; i++) {
                figureZ.rotate();
            }
            var expected = [[0, "Z"],["Z", "Z"], ["Z", 0]];
            var actual = figureZ.form;
            expect(actual).toEqual(expected);
        });

        it("rotate figureZ 16 times", function () {
            var figureZ = figureNS.createFigureZ();
            var rotationCount = 16;
            for (var i = 0; i < rotationCount; i++) {
                figureZ.rotate();
            }
            var expected = [["Z", "Z", 0], [0, "Z", "Z"]];
            var actual = figureZ.form;
            expect(actual).toEqual(expected);
        });
    });

    describe("createRandomFigure", function () {
        it("initialize randomFigure", function () {
            var randomFigure = figureNS.createRandomFigure();
            expect(randomFigure).not.toBeNull();
        });

        function compareMatrix(first, second) {
            var row = 0;
            var col = 0;

            if (first.length !== second.length ||
                       first[0].length !== second[0].length) {
                return false;
            }

            for (row = 0; row < first.length; row++) {
                for (col = 0; col < first[row].length; col++) {
                    if (first[row][col] !== second[row][col]) {
                        return false;
                    }
                }
            }

            return true;
        }

        it("create 16 random figures and check if every time they are the same", function () {
            // Chances are 1 : 7^16 that all figures generated by createRandomFigure() will be the same 
            var initialFigure = figureNS.createFigureT();
            var randomFigure = initialFigure;
            var randomIterations = 16;
            var figureMatches = 0;
            var figureAreSame = true;

            for (var i = 0; i < randomIterations; i++) {
                randomFigure = figureNS.createRandomFigure();
                figureAreSame = compareMatrix(randomFigure.form, initialFigure.form);
                if (figureAreSame) {
                    figureMatches++;
                }
            }

            expect(figureMatches).not.toBe(randomIterations);
        });

        it("spy on randomFigure and return FigureI", function () {
            spyOn(figureNS, 'createRandomFigure').andReturn(figureNS.createFigureI());
            var randomFigure = figureNS.createRandomFigure();
            var expected = [["I", "I", "I", "I"]];
            var actual = randomFigure.form;
            expect(actual).toEqual(expected);
        });
    });
});