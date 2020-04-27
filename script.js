$(document).ready(function () {
    var ptagDate = $("#currentDay");
    var todaysDate = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    ptagDate.text(todaysDate);
});

$("#clear").click(function () {
    localStorage.clear();
    location.reload()
});

var insertedText1 = document.querySelector("#note1");
var saveButton1 = document.querySelector("#saveNote1");
insertedText1.value = localStorage.getItem("input1");
saveNote1.addEventListener("click", updatedText1);
function updatedText1() {
    localStorage.setItem("input1", insertedText1.value);
};