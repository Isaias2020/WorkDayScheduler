//----------function to display currentdate in the header--------//
$(document).ready(function () {
    var ptagDate = $("#currentDay");
    var todaysDate = moment().format('dddd, MMMM Do YYYY, h:mm a');
    ptagDate.text(todaysDate);
});

//-------------------array for each time block-------------------//
var timesOfDay = ["09AM", "10AM", "11AM"
    , "12PM", "1PM", "2PM", "3PM", "4PM", "5PM",];

for (var i = 1; i < timesOfDay.length + 1; i++) {
    var container = $("<div>");
    container.attr("class", "container");

    var row = $("<div>");
    row.attr("class", "row");

    var timeBlock = $("<div>");
    timeBlock.attr("class", "time-block past bg-secondary");
    timeBlock.text(timesOfDay[i - 1]);

    //--form for inserted text && color code for "past", "present", "future"--//    
    var textArea = $("<textarea>");
    textArea.attr("id", "note" + i);
    if (timesOfDay[i - 1] === moment().format("hA")) {
        textArea.attr("class", "description present");
    } else if (timesOfDay[i - 1] > moment().format("hA")) {
        textArea.attr("class", "description future");
    } else {
        textArea.attr("class", "description past");
    }
    //-----------Save buttons----------------------//
    var myButton = $("<button>");
    myButton.attr("id", "saveNote" + i);
    myButton.attr("class", "saveBtn");
    myButton.attr("data-id", i);
    myButton.append('<i class="fas fa-save"></i>');

    row.append(timeBlock, textArea, myButton);
    container.append(row);
    $(".appendTo").append(container);
}
//--To save inserted text to local Storage after pressing save--//
$(".appendTo").on("click", ".saveBtn", function () {
    var notes = $("#note" + $(this).attr("data-id")).val();
    console.log(notes);
    localStorage.setItem("todo" + $(this).attr("data-id"), JSON.stringify(notes));
});
//----------For Clear Schedule button----------//
$("#clear").click(function () {
    localStorage.clear();
    location.reload();
});

//---To display text in text area after refreshing browser---//
localStorageReturnAndShowOnPage();

function localStorageReturnAndShowOnPage() {
    for (var j = 1; j < timesOfDay.length + 1; j++) {
        var localStorageNote = JSON.parse(localStorage.getItem("todo" + j));

        if (localStorageNote !== null) {
            $("#note" + j).text(localStorageNote);
        }
    }
}