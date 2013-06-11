var figureNS = (function () {

    // Figure class

    var Figure = $.inherit({
        __constructor: function (form) {
            this.form = form;
        },
        rotate: function () {
            var rotatedForm = [];
            var i = 0;
            var j = 0;

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
            var form = [[1, 0, 0], [1, 1, 1]];
            this.__base(form);
        }
    });

    var FigureL = $.inherit(Figure, {
        __constructor: function () {
            var form = [[0, 0, 1], [1, 1, 1]];
            this.__base(form);
        }
    });

    var FigureO = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1, 1], [1, 1]];
            this.__base(form);
        }
    });

    var FigureS = $.inherit(Figure, {
        __constructor: function () {
            var form = [["0", "S", "S"], ["S", "S", "0"]];
            this.__base(form);
        }
    });

    var FigureT = $.inherit(Figure, {
        __constructor: function () {
            var form = [["0", "T", "0"], ["T", "T", "T"]];
            this.__base(form);
        }
    });

    var FigureZ = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1, 1, 0], [0, 1, 1]];
            this.__base(form);
        }
    });

    return {
        createFigureI: function () {
            return new FigureI();
        },
        createFigureJ: function () {
            return new FigureJ()
        },
        createFigureL: function () {
            return new FigureL()
        },
        createFigureT: function () {
            return new FigureT()
        },
        createFigureO: function () {
            return new FigureO()
        },
        createFigureS: function () {
            return new FigureS()
        },
        createFigureZ: function () {
            return new FigureZ()
        },
    }
}());

