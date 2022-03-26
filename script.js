// var moment = moment().format("H")

//gives the current month,day,year,hours,minutes,seconds and AM/PM
var today = moment();
$("#day").text(today.format("MMMM Do YYYY, h:mm:ss a"));


//looks up the current time for the highligted hour
var currentTime = {text: moment().format("h:00 A"), hour: moment().hour()};


var store = window.localStorage;

var now = moment(); 

//funtion to highlight current hour
function(){

}

//function to save text in text box

//make a functional button to save

