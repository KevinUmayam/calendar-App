var DisplaytimeEl = $("#todaysDate");
const textareaC = $(".colorT");
const saveBtn = $(".btn");
let savedNotes = {};
// time
let today = new Date();
let currentHour = today.getHours();
console.log(currentHour);
console.log(textareaC);
let timeID;
let textInput;

function displayTime() {
  var todaysDate = moment().format("dddd, MMMM Do [||] hh:mm A[||]GGGG");
  DisplaytimeEl.text(todaysDate);
}

setInterval(displayTime, 1000);

function saveTLS() {
  window.localStorage.setItem(timeID, textInput);
}

function updateTextA() {
  for (let hour = 9; hour <= 20; hour++) {
    var textArea = $("#hour-" + hour);
    if (hour < currentHour) {
      textArea.removeClass("future present").addClass("past");
      console.log("hello");
    } else if (hour === currentHour) {
      textArea.removeClass("past future").addClass("present");
      console.log("hi");
    } else {
      textArea.removeClass("past present").addClass("future");
      console.log("happy");
    }
    textArea.val(window.localStorage.getItem("hour-" + hour));
  }
}
updateTextA();

saveBtn.click(function (e) {
  e.preventDefault();

  textInput = $(this).siblings(".colorT").val();
  console.log(textInput);
  timeID = $(this).siblings(".colorT").attr("id");
  console.log(timeID);
  //   arrayHtml.forEach(function (currentNotes) {});`
  saveTLS();
});
