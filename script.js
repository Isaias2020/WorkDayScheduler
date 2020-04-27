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

var insertedText2 = document.querySelector("#note2");
var saveButton2 = document.querySelector("#saveNote2");
insertedText2.value = localStorage.getItem("input2");
saveNote2.addEventListener("click", updatedText2);
function updatedText2() {
    localStorage.setItem("input2", insertedText2.value);
};

var insertedText3 = document.querySelector("#note3");
var saveButton3 = document.querySelector("#saveNote3");
insertedText3.value = localStorage.getItem("input3");
saveNote3.addEventListener("click", updatedText3);
function updatedText3() {
    localStorage.setItem("input3", insertedText3.value);
};

var insertedText4 = document.querySelector("#note4");
var saveButton4 = document.querySelector("#saveNote4");
insertedText4.value = localStorage.getItem("input4");
saveNote4.addEventListener("click", updatedText4);
function updatedText4() {
    localStorage.setItem("input4", insertedText4.value);
};

var insertedText5 = document.querySelector("#note5");
var saveButton5 = document.querySelector("#saveNote5");
insertedText5.value = localStorage.getItem("input5");
saveNote5.addEventListener("click", updatedText5);
function updatedText5() {
    localStorage.setItem("input5", insertedText5.value);
};

var insertedText6 = document.querySelector("#note6");
var saveButton6 = document.querySelector("#saveNote6");
insertedText6.value = localStorage.getItem("input6");
saveNote6.addEventListener("click", updatedText6);
function updatedText6() {
    localStorage.setItem("input6", insertedText6.value);
};

var insertedText7 = document.querySelector("#note7");
var saveButton7 = document.querySelector("#saveNote7");
insertedText7.value = localStorage.getItem("input7");
saveNote7.addEventListener("click", updatedText7);
function updatedText7() {
    localStorage.setItem("input7", insertedText7.value);
};

var insertedText8 = document.querySelector("#note8");
var saveButton8 = document.querySelector("#saveNote8");
insertedText8.value = localStorage.getItem("input8");
saveNote8.addEventListener("click", updatedText8);
function updatedText8() {
    localStorage.setItem("input8", insertedText8.value);
};

var insertedText9 = document.querySelector("#note9");
var saveButton9 = document.querySelector("#saveNote9");
insertedText9.value = localStorage.getItem("input9");
saveNote9.addEventListener("click", updatedText9);
function updatedText9() {
    localStorage.setItem("input9", insertedText9.value);
};
