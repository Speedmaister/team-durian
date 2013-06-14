/// <reference path="jQuery-1.10.1.js" />
var figureNS = (function () {

    // Figure class

    var Figure = $.inherit({
        __constructor: function (form) {
            this.form = form;
        },
        rotate: function () {
            var i = 0;
            var j = 0;
            var rotatedForm = [];

            for (i = this.form[0].length - 1; i >= 0; i--) {
                rotatedForm.push([]);
            }

            for (i = this.form.length - 1; i >= 0; i--) {
                for (j = this.form[i].length - 1; j >= 0; j--) {
                    rotatedForm[j].push(this.form[i][j]);
                }
            }

            this.form = rotatedForm;
        }
        
    });

    var FigureI = $.inherit(Figure, {
        __constructor: function () {
            var form = [["I", "I", "I", "I"]];
            this.__base(form);
        }
    });

    var FigureJ = $.inherit(Figure, {
        __constructor: function () {
            var form = [["J", 0, 0], ["J", "J", "J"]];
            this.__base(form);
        }
    });

    var FigureL = $.inherit(Figure, {
        __constructor: function () {
            var form = [[0, 0, "L"], ["L", "L", "L"]];
            this.__base(form);
        }
    });

    var FigureO = $.inherit(Figure, {
        __constructor: function () {
            var form = [["O", "O"], ["O", "O"]];
            this.__base(form);
        }
    });

    var FigureS = $.inherit(Figure, {
        __constructor: function () {
            var form = [[0, "S", "S"], ["S", "S", 0]];
            this.__base(form);
        }
    });

    var FigureT = $.inherit(Figure, {
        __constructor: function () {
            var form = [[0, "T", 0], ["T", "T", "T"]];
            this.__base(form);
        }
    });

    var FigureZ = $.inherit(Figure, {
        __constructor: function () {
            var form = [["Z", "Z", 0], [0, "Z", "Z"]];
            this.__base(form);
        }
    });

    return {
        createFigureI: function () {
            return new FigureI();
        },
        createFigureJ: function () {
            return new FigureJ();
        },
        createFigureL: function () {
            return new FigureL();
        },
        createFigureT: function () {
            return new FigureT();
        },
        createFigureO: function () {
            return new FigureO();
        },
        createFigureS: function () {
            return new FigureS();
        },
        createFigureZ: function () {
            return new FigureZ();
        },
        createRandomFigure: function () {
            var randomIndex = Math.random() * 7 | 0;
            switch (randomIndex) {
                case 0: return this.createFigureI();
                case 1: return this.createFigureJ();
                case 2: return this.createFigureL();
                case 3: return this.createFigureT();
                case 4: return this.createFigureO();
                case 5: return this.createFigureS();
                case 6: return this.createFigureZ();
                default: throw { message: "Cannot generate random figure" };
            }
        }
    }
}());

