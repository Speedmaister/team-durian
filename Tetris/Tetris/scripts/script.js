
var tetrisLocalStorage = (function () {
    var storageHTML =
    $("<div id='storage'>" +
      "<label for='playerName'>Player Name</label>" +
      "<input type='text' name='playerName' id='playerName'>" +
      "<button id='regBtn'>Register</button>"
      + "</div>");
    $("body").append(storageHTML);
    //$("#storage").css("display", "none");
 
    showList();
}());

$("#regBtn").on("click", function () {
    var arr = [];
    $("#scores").html("");
    var playerName = $("#playerName").val();
    localStorage.setItem(playerName, score);
   
    for (var key in localStorage) {
        var playerScores = localStorage.getItem(key);

        var player = {
            scoreP: playerScores,
            name: key,
        };
        arr.push(player);
    }
    $("#playerName").val("");
    $("#regBtn").attr("disabled", true);
    showList();
});

function showResults() {
    $("#storage").css("display", "block");
}

function showList() {
    $("#scores").html("");
    var arr = [];
    for (var key in localStorage) {
        var playerScores = localStorage.getItem(key);

        var player = {
            scoreP: playerScores,
            name: key,
        };
        arr.push(player);
    }

    var sortedList = arr.sort(function (a, b) {
        return parseInt(a.scoreP) - parseInt(b.scoreP);
    });

    var resultHTML = $("<ul id='scores'></ul>");
    var counter = 0;
    for (var i = sortedList.length - 1; i >= 0; i--, counter++) {
        if (counter > 5) {
            break;
        }
        resultHTML.append('<li>'
                          + "<span class='position'>" + "Place " + (counter + 1) + "</span>"
                          + "<span class='playerName'> " + sortedList[i].name + "</span>"
                          + "<span class='playerScores'> " + sortedList[i].scoreP + "  scores" + "<span>"
                          + '</li>');
    }
    $("#storage").append(resultHTML);
    var time = 0;
    $('#storage li').hide().each(function () {
        $(this).delay(time).fadeIn('slow');
        time += 200;
    });
  
}