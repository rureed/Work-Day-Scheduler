var m = moment();

$(document).ready(function() {
    $("#currentDay").text(m.format("dddd, MMMM Do YYYY"));

    console.log(currentDay)

    // function colorCode() {
    //     var now = m.hours()
    // I puzzled over this for some time, but ran out of time to complete the color coding.

    });

    $(".saveBtn").on("click", function() {
        var time = $(this).parent().attr("id");
        var data = $(this).siblings("input").val();
        localStorage.setItem(time, data);
        console.log(time, data);

    
      $("#9").children("input").val(localStorage.getItem("9"));
      $("#10").children("input").val(localStorage.getItem("10"));
      $("#11").children("input").val(localStorage.getItem("11"));
      $("#12").children("input").val(localStorage.getItem("12"));
      $("#1").children("input").val(localStorage.getItem("1"));
      $("#2").children("input").val(localStorage.getItem("2"));
      $("#3").children("input").val(localStorage.getItem("3"));
      $("#4").children("input").val(localStorage.getItem("4"));
      $("#5").children("input").val(localStorage.getItem("5"));

    });

    




