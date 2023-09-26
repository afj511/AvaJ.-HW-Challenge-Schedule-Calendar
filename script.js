//Variables
var dateTime = $('#dateTime');
var saveBtn = document.querySelector(".saveBtn");

var timeNow = moment().hour();

//Shows current time and date
function printDateTime() {
    var date = moment().format("dddd, MMM Do YYYY")
    dateTime.text(date);
}

// Tracks the hour the event was put in considering the time it is currently
function hourTracker() {
    $('.timeSchedule').each(function () {
        var scheduledTime = $(this).attr("id").split("time")[1];
        console.log("timeNow " + timeNow)
        console.log("scheduledTime " + scheduledTime)

        if (scheduledTime < timeNow) {
            $(this).addClass("past");
        }
        else if (scheduledTime == timeNow) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
}

//Saves the event
$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
})

$("#time08 .description").val(localStorage.getItem("time08"));
$("#time09 .description").val(localStorage.getItem("time09"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time13 .description").val(localStorage.getItem("time13"));
$("#time14 .description").val(localStorage.getItem("time14"));
$("#time15 .description").val(localStorage.getItem("time15"));
$("#time16 .description").val(localStorage.getItem("time16"));
$("#time17 .description").val(localStorage.getItem("time17"));

printDateTime();
hourTracker();