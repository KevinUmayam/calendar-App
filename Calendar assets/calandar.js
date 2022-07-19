var DisplaytimeEl = $("#todaysDate");
const textareaC = document.querySelectorAll(".colorT");
const saveBtn = document.querySelector(".btn");
let savedNotes = {};
// time
let today = new Date();
let currentHour = today.getHours();
console.log(currentHour);
console.log(textareaC);
function displayTime() {
  var todaysDate = moment().format("dddd, MMMM Do [:] hh:mm A[||]GGGG");
  DisplaytimeEl.text(todaysDate);
}

setInterval(displayTime, 1000);

let TextA = document.getElementsByClassName("colorT");
let arrayHtml = [].slice.call(TextA);

console.log(arrayHtml);
arrayHtml.forEach(function (textArea) {
  //   get integer from id with parseInt https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  let boxhour = parseInt($(textArea).attr("id"));

  console.log(boxhour, currentHour);
  console.log(typeof currentHour);

  if (boxhour < currentHour) {
    $("textarea").removeClass("future present").addClass("past");
    console.log("hello");
  } else if (boxhour === currentHour) {
    $("textarea").removeClass("past future").addClass("present");
    console.log("hi");
  } else {
    $("textarea").removeClass("past present").addClass("future");
    console.log("happy");
  }
});

// function past() {
//   //   const changeB = document.getElementsByTagName("textarea");
//   //   changeB.removeAttribute("class", "future");
//   //   changeB.setAttribute("class", "past");
//   //   document.getElementsByTagName("textarea").removeAttribute("class", "future");
// }

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  arrayHtml.forEach(function (currentNotes) {});
});

// $(textareaC).removeClass("future");
// $(textareaC).addClass("past");
// $(textareaC).removeClass("past");
// $(textareaC).addClass("present");
// $(textareaC).removeClass("present");
// $(textareaC).addClass("future");
