
$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    console.log(currentDay)

    function colorCode() {
        var now = moment().hours()
    
    }



})


$(".saveBtn").on("click", function() {
    var entry = $(this).parent().attr("id");
    var data = $("textarea").val();
    localStorage.setItem(entry, data);
})

$("#9am").children("textarea").val(localStorage.getItem("9am"));
