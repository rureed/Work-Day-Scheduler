var m = moment();

$(document).ready(function() {
    $("#currentDay").text(m.format("dddd, MMMM Do YYYY"));

    console.log(currentDay)

    function colorCode() {
        var now = m.hours()
    

    }

    $(".saveBtn").on("click", function() {
        var time = $(this).parent().attr("id");
        var data = $(this).siblings("input").val();
        localStorage.setItem(time, data);
        console.log(time, data);
    });
    
      $("#9").children("input").val(localStorage.getItem("9"));
      $("#10").children("input").val(localStorage.getItem("10"));
      $("#11").children("input").val(localStorage.getItem("11"));
      $("#12").children("input").val(localStorage.getItem("12"));
      $("#1").children("input").val(localStorage.getItem("1"));
      $("#2").children("input").val(localStorage.getItem("2"));
      $("#3").children("input").val(localStorage.getItem("3"));
      $("#4").children("input").val(localStorage.getItem("4"));
      $("#5").children("input").val(localStorage.getItem("5"));

      var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
      updatetime();
      
      function updatetime() {
        var currentTime = moment().format('H');
        for(var i = 0; i < timeOfday.length; i++) {
      
          if (parseInt(timeOfday[i]) > currentTime) {
            $("#" + timeOfday[i]).attr("style", "background-color: #58ce7b");      
      
          }
          else if (parseInt(timeOfday[i]) < currentTime) {
            $("#" + timeOfday[i]).attr("style", "background-color: lightgray");
      
          }
          else if (parseInt(timeOfday[i]) == currentTime) {
            $("#" + timeOfday[i]).attr("style", "background-color: #fc665e");
          
          }
        }
      }

    })




