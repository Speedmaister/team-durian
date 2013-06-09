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
            var form = [[1, 1, 1, 1]];
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
            var form = [[0, 1, 1], [1, 1, 0]];
            this.__base(form);
        }
    });

    var FigureT = $.inherit(Figure, {
        __constructor: function () {
            var form = [[0, 1, 0], [1, 1, 1]];
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
        I: new FigureI(),
        J: new FigureJ(),
        L: new FigureL(),
        T: new FigureT(),
        O: new FigureO(),
        S: new FigureS(),
        Z: new FigureZ(),
    }
}());

