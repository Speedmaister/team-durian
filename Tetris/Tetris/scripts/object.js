var figureNS = (function(){

    // Figures

    // Figure class

    var Figure = $.inherit({
        __constructor: function (form) {
            this.form = form;
        }
    });

    // I
    var FigureI = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1, 1, 1, 1]];
            this.__base(form);
        }
    });

    // J
    var FigureJ = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1, 0, 0], [1, 1, 1]];
            this.__base(form);
        }
    });

    // L
    var FigureL = $.inherit(Figure, {
        __constructor: function () {
            var form = [[0, 0, 1], [1, 1, 1]];
            this.__base(form);
        }
    });

    // O
    var FigureO = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1, 1], [1, 1]];
            this.__base(form);
        }
    });

    // S
    var FigureS = $.inherit(Figure, {
        __constructor: function () {
            var form = [[0, 1, 1], [1, 1, 0]];
            this.__base(form);
        }
    });

    // T
    var FigureT = $.inherit(Figure, {
        __constructor: function () {
            var form = [[0, 1, 0], [1, 1, 1]];
            this.__base(form);
        }
    });

    // Z
    var FigureZ = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1, 1, 0], [0, 1, 1]];
            this.__base(form);
        }
    });

    return {
        I: FigureI,
        J: FigureJ,
        L: FigureL,
        T: FigureT,
        O: FigureO,
        S: FigureS,
        Z: FigureZ,
    }
} ());