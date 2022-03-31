// var moment = moment().format("H")

//gives the current month,day,year,hours,minutes,seconds and AM/PM
var today = moment();
$("#day").text(today.format("MMMM Do YYYY, h:mm:ss a"));


//looks up the current time for the highligted hour
var currentTime = {text: moment().format("h:00 A"), hour: moment().hour()};
console.log(currentTime)

var now = moment(); 

var rowEl = $("#row")
// console.log(row);

var currentHourEl = $(".currentHour")

var textBoxEL = $(".textBox")

var saveButtonEl = $(".saveButton")

//funtion to highlight current hour, in progess
function color(time){
  return time.hour === rowEl
    ? "bg-danger"
    : time.hour < now
    ? "bg-secondary"
    : "bg-success";
}

//another way i am trying

  if (currentTime.hour === now) {
    $(rowEl).css({ "background-color": "#5E5B52"

    })
  }
  

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
