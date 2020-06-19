// alert("hola");
//display current day using moment.js at the top of the calendar
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

// localStorage.setItem('key', 'value')
$(".saveBtn").click(function () {
  var textValue = $(".text-"+$(this).attr("data-block")).val();
  var textKey = $(this).attr("data-block");
  console.log(textValue);
  localStorage.setItem(textKey,textValue)
});
console.log(localStorage.getItem("9"));
console.log(localStorage.getItem("10"));


// get item from localStorage put it onto the page
// compare Times 
// datablock has the times moment().hour()
// if statement color for the hour

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// var saveBtn = document.querySelector("description");
// saveBtn.addEventListener("submit", function (event) {
//   event.preventDefault();
//   init();
//   storeDay();

// function init() {
//   // Get stored todos from localStorage
//   // Parsing the JSON string to an object
//   var storedDay = JSON.parse(localStorage.getItem("textarea"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedDay !== null) {
//     textarea = storedDay;
//   }

// }
// var textarea = [];
// function storedDay() {
//   // Stringify and set "todos" key in localStorage to todos array
  
// }