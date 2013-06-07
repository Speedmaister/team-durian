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
var FigureJ = $.inherit(Figure, {
    __constructor: function () {
        var form = [[0, 0, 1], [1, 1, 1]];
        this.__base(form);
    }
});

// O
var FigureJ = $.inherit(Figure, {
    __constructor: function () {
        var form = [[1, 1], [1, 1]];
        this.__base(form);
    }
});

// S
var FigureJ = $.inherit(Figure, {
    __constructor: function () {
        var form = [[0, 1, 1], [1, 1, 0]];
        this.__base(form);
    }
});

// T
var FigureJ = $.inherit(Figure, {
    __constructor: function () {
        var form = [[0, 1, 0], [1, 1, 1]];
        this.__base(form);
    }
});

// Z
var FigureJ = $.inherit(Figure, {
    __constructor: function () {
        var form = [[1, 1, 0], [0, 1, 1]];
        this.__base(form);
    }
});