var figureNS = (function () {

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

    var FigureIRotated90Degrees = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1], [1], [1], [1]];
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

    var FigureJRotated90Degrees = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1, 1], [1, 0], [1, 0]];
            this.__base(form);
        }
    });

    var FigureJRotated180Degrees = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1, 1, 1], [0, 0, 1]];
            this.__base(form);
        }
    });

    var FigureJRotated270Degrees = $.inherit(Figure, {
        __constructor: function () {
            var form = [[0, 1], [0, 1], [1, 1]];
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

    var FigureLRotated90Degrees = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1, 0], [1, 0], [1, 1]];
            this.__base(form);
        }
    });

    var FigureLRotated180Degrees = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1, 1, 1], [1, 0, 0]];
            this.__base(form);
        }
    });

    var FigureLRotated270Degrees = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1, 1], [0, 1], [0, 1]];
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

    var FigureSRotated90Degrees = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1, 0], [1, 1], [0, 1]];
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

    var FigureTRotated90Degrees = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1, 0], [1, 1], [1, 0]];
            this.__base(form);
        }
    });

    var FigureTRotated180Degrees = $.inherit(Figure, {
        __constructor: function () {
            var form = [[1, 1, 1], [0, 1, 0]];
            this.__base(form);
        }
    });

    var FigureTRotated270Degrees = $.inherit(Figure, {
        __constructor: function () {
            var form = [[0, 1], [1, 1], [0, 1]];
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

    var FigureZRotated90Degrees = $.inherit(Figure, {
        __constructor: function () {
            var form = [[0, 1], [1, 1], [1, 0]];
            this.__base(form);
        }
    });

    return {
        I: new FigureI(),
        IRotated90Degrees: new FigureIRotated90Degrees(),
        J: new FigureJ(),
        JRotated90Degrees: new FigureJRotated90Degrees(),
        JRotated180Degrees: new FigureJRotated180Degrees(),
        JRotated270Degrees: new FigureJRotated270Degrees(),
        L: new FigureL(),
        LRotated90Degrees: new FigureLRotated90Degrees(),
        LRotated180Degrees: new FigureLRotated180Degrees(),
        LRotated270Degrees: new FigureLRotated270Degrees(),
        T: new FigureT(),
        TRotated90Degrees: new FigureTRotated90Degrees(),
        TRotated180Degrees: new FigureTRotated180Degrees(),
        TRotated270Degrees: new FigureTRotated270Degrees(),
        O: new FigureO(),
        S: new FigureS(),
        SRotated90Degrees: new FigureSRotated90Degrees(),
        Z: new FigureZ(),
        ZRotated90Degrees: new FigureZRotated90Degrees()
    }
}());

