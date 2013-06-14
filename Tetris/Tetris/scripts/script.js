var tetrisLocalStorage = (function () {
    var tetrisStorage = $.localStorage;

    var storageHTML =
    $("<div id='storage'>" +
      "<label for='playerName'>Player Name</label>" +
      "<input type='text' name='playerName' id='playerName'>" +
      "<button id='regBtn'>Register</button>"
      + "</div>");
    $("body").append(storageHTML);
    $("#storage").css("display", "none");

    return {
        getStorage: tetrisStorage
    };
}());
var scoreStorage = tetrisLocalStorage.getStorage();

$("#regBtn").on("click", function () {
    console.log(scoreStorage);
    var arr = [];
    var playerName = $("#playerName").val();

    scoreStorage.setItem(playerName, score);

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var player = {
            playerScores: scoreStorage.getItem(key),
            name: key,
        };
        arr.push(player);
    }
    //console.log(arr);
    showList(arr);
});

function showResults() {
    $("#storage").css("display", "block");
}

function showList(arr) {
    var sortedList = arr.sort(function (a, b) {
        return parseInt(a.playerScores) - parseInt(b.playerScores);
    });

    var resultHTML = $("<ul id='scores'></ul>");
    var counter = 0;
    for (var i = sortedList.length - 1; i >= 0; i--, counter++) {
        if (counter > 4) {
            break;
        }
        resultHTML.append('<li>'
            + "<span class='position'>" + "Place " + (counter + 1) + "</span>"
            + "<span class='playerName'> " + sortedList[i].name + "</span>"
            + "<span class='playerScores'> " + sortedList[i].playerScores + "  scores" + "<span>"
            + '</li>');
    }
    $("#storage").append(resultHTML);

}