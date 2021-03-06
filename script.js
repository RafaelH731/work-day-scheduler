// var moment = moment().format("H")

//gives the current month,day,year,hours,minutes,seconds and AM/PM
var today = moment();
$("#day").text(today.format("MMMM Do YYYY, h:mm:ss a"));


//looks up the current time for the highligted hour
var currentTime = {text: moment().format("h:00 A"), hour: moment().hour()};
console.log(currentTime)

var now = moment(); 

//the plus in front converts into a number
var currentHour = +moment().format("H")

var rowEl = $(".row")
// console.log(row);

var currentHourEl = $(".currentHour")

var textBoxEL = $(".textBox")

var saveButtonEl = $(".saveButton")

//funtion to highlight current hour, in progess
// function color(time){
//   return currentTime.hour === rowEl
//     ? "bg-danger"
//     : currentTime.hour < now
//     ? "bg-secondary"
//     : "bg-success";
// }

//I think this should work but I cant get it to connect
rowEl.each(function () {
  var rowHour = parseInt($(this).attr("id"));
  console.log( rowHour, currentHour)
  if (rowHour < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
}
else if (rowHour === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
}
else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
}
})





//another way i am trying

  // if (currentTime.hour === ) {
  //   $(rowEl).css({ "background-color": "#5E5B52"

  //   })
  // }
  // console.log(currentTime.hour)

//function to save text in text box
//make a functional button to save
 saveButtonEl.on("click", function (e) {
  var target = e.target;
  var parent =  $(target).parent();
  var id = $(parent).attr('id');

  var text1 = $(parent).find('.currentHour').html();
  var textareaVal = $(parent).find('textarea').val();

   console.log(text1, textareaVal);

   var storageInfo = localStorage.getItem("localStorageInfo");

   var newInfo = {};
   if (storageInfo) {
     storageInfo = JSON.parse(storageInfo);
     storageInfo[id] = textareaVal;
     newInfo = storageInfo;
   } else {
     newInfo[id] = textareaVal;
   }

   console.log(newInfo);
   localStorage.setItem("localStorageInfo", JSON.stringify(newInfo));

    })

    // load 
    function loadDataFromStorage() {
      var savedInfo = localStorage.getItem("localStorageInfo");
      if (savedInfo) {
        var info = JSON.parse(savedInfo);
        var keys = Object.keys(info);

        console.log(info)
;
        keys.forEach(key => {
          var val = info[key];
          //save to text 
          $(`#${key} textarea`).val(val);
        })
      }
    }

    //call 
    loadDataFromStorage();
