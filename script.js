// var moment = moment().format("H")

//gives the current month,day,year,hours,minutes,seconds and AM/PM
var today = moment();
$("#day").text(today.format("MMMM Do YYYY, h:mm:ss a"));


//looks up the current time for the highligted hour
var currentTime = {text: moment().format("h:00 A"), hour: moment().hour()};
console.log(currentTime)

//var store = window.localStorage;

var now = moment(); 

var row = $("#row")

var currentHour = $(".currentHour")

var textBox = $(".textBox")

var saveButton = $(".saveButton")

//funtion to highlight current hour, in progess
function color(time){
  return time.hour === row.text
    ? "bg-danger"
    : time.hour < now
    ? "bg-secondary"
    : "bg-success";
}

//another way i am trying

  if (currentHour == now) {
    $("row").css({ "background-color": "#5E5B52"

    })
  }
  

//function to save text in text box
//make a functional button to save
 $(".saveButton").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".textBox").val(); 
        var time = $(this).parent().attr("id"); 

        //set items in local storage.
        localStorage.setItem(time, text);
    })
//another method I could try

// if (localStorage["textBox"])
// {
//   textBox = localStorage["textBox"];
//   document.getElementById("textBox").value = textBox;

// }

// saveButton.on("click", function()
// {
//    textBox = document.getElementById("textBox").value ;
//         //localStorage["user"] = user ;
//         localStorage.setItem("textBox", textBox) ;
// })