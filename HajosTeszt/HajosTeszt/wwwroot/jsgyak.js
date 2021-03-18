var prevArr = [1];
var curArr = [1, 1];
var start = 1;
var rows = 3;

function Pascal() {
    prevArr = [start];
    curArr = [start, start];
    for (var i = 0; i <= rows; i++) {
        if (rows > 2) {
            prevArr = curArr;
            curArr = new Array(i);
        }
        if (rows > 2)
            CreateRows();
        else if (rows < 2) {
            $("#Pascal").text("A triangle needs at least 2 rows!");
        }
        else {
            $("#Pascal").html(prevArr + "<br>" + curArr[0] + " " + curArr[1]);
        }
    }
}

function CreateRows() {
    for (var i = 0; i < curArr.length; i++) {
        if (i == 0 || i == curArr.length - 1) {
            curArr[i] = start;
        } else {
            curArr[i] = prevArr[i - 1] + prevArr[i];
        }
        $("#Pascal").append(curArr[i] + " ");
    }
    $("#Pascal").append("<br>");
}

$(document).ready(function () {
    $("input").val(3);
    $("#create").click(function () {
        start = parseInt($("#start").val());
        rows = parseInt($("#rows").val());
        $("#Pascal").text("");
        Pascal();
    });
});