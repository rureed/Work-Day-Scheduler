
$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    console.log(currentDay)

    function colorCode() {
        var now = moment().hours()
    
    }



})


// $(".saveBtn").on("click", function() {
//     var entry = $("#9am").parent().attr("id");
//     var data = $("textarea").val();
//     localStorage.setItem(entry, data);
//     console.log(entry);
// })

// $("#9am").children("textarea").val(localStorage.getItem("9am"));

$(".saveBtn").on("click", function() {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $(this).siblings("input").val();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});

//-------Getting individual childern and setting to parent-----//
  $("#9am").children("input").val(localStorage.getItem("9am"));

  $("#10am").children("input").val(localStorage.getItem("10am"));

  $("#11am").children("input").val(localStorage.getItem("11am"));

  $("#12pm").children("input").val(localStorage.getItem("12pm"));

  $("#1pm").children("input").val(localStorage.getItem("1pm"));

  $("#2pm").children("input").val(localStorage.getItem("2pm"));

  $("#3pm").children("input").val(localStorage.getItem("3pm"));

  $("#4pm").children("input").val(localStorage.getItem("4pm"));

  $("#5pm").children("input").val(localStorage.getItem("5pm"));