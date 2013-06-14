var tetrisLocalStorage = (function () {
    var tetrisStorage = $.localStorage;

    var storageHTML =
    $("<div id='storage'>" +
      "<label for='playerName'>Player Name</label>" +
      "<input type='text' name='playerName' id='playerName'>" +
      "<button id='regBtn'>Register</button>"
      + "</div>");
    $("body").append(storageHTML);

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
});