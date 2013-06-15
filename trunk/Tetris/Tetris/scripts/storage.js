var TetrisStorage = (function () {
    var arr = [];
    this._tetrisLocalStorage = function () {
        var storageHTML =
        $("<div id='storage'>" +
          "<div id='regHolder'>" +
          "<label for='playerName'>Enter Your Name</label>" +
          "<input type='text' name='playerName' id='playerName' placeholder='Name'>" +
          "<button id='regBtn'>Register</button>" +
          "</div>"
          + "</div>");
        $("body").append(storageHTML);
        $("#regHolder").css("display", "none");
        showList();
    };

    var addPlayer = function () {
        $("#regBtn").on("click", function () {
            arr = [];
            $("#scores").html("");
            var playerName = $("#playerName").val();
            if (playerName === "") {
                $("#playerName").after("<div class='error'>" +
                    "<div class='arrow-right'></div>" +
                    "Please fill out this field." +
                    "</div>");

                return;
            }
            else {
                $(".error").remove();
            }

            if (playerName.length < 4) {
                $("#playerName").after("<div class='error'>" +
                    "<div class='arrow-right'></div>" +
                    "Name must contains more than 3 letters." +
                    "</div>");
                return;
            }
            else {
                $(".error").remove();
            }

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
            $("#regBtn").css({
                background: "#4b535d",
                color: "#8c8474",
                border: 1 + "px  solid  #5f5e5c"
            });
            showList();
        });
    };

    this._checkCurrentScore = function (score) {
        var sortedList = arr.sort(function (a, b) {
            return parseInt(a.scoreP) - parseInt(b.scoreP);
        });

        if (sortedList.length < 1) {
            $("#regHolder").slideDown("slow");
            addPlayer();
        }

        var counter = 0;
        for (var i = sortedList.length - 1; i >= 0; i--, counter++) {
            if (counter > 9) {
                break;
            }

            if ((score > parseInt(sortedList[i].scoreP))
                || sortedList.length < 10) {
                $("#regHolder").slideDown(1000);
                addPlayer();
                break;
            }
        }
    };

    var showList = function () {
        $("#scores").html("");
        arr = [];
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

        var resultHtml = $("<ul id='scores'></ul>");
        var counter = 0;
        for (var i = sortedList.length - 1; i >= 0; i--, counter++) {
            if (counter > 9) {
                break;
            }

            resultHtml.append(
             '<li>'
                + "<span class='position'>" + "Place " + (counter + 1) + "</span>"
                + "<span class='playerName'> " + sortedList[i].name + "</span>"
                + "<span class='playerScores'> " + sortedList[i].scoreP + "  scores" + "<span>"
           + '</li>');
        }

        $("#storage").append(resultHtml);

        var time = 0;
        $('#storage li').hide().each(function () {
            $(this).delay(time).fadeIn('slow');
            time += 200;
        });
    };

    return {
        _getTetrisStrage: _tetrisLocalStorage,
        _checkCurrentScore: _checkCurrentScore
    };
}());

TetrisStorage._getTetrisStrage();



