$(document).ready(function () {
    var ptagDate = $("#currentDay");
    var todaysDate = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    ptagDate.text(todaysDate);
});