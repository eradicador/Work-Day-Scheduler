// alert("hola");
//display current day using moment.js at the top of the calendar
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));


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


// init();
// event();
// function init() {
//     // Get stored todos from localStorage
//     // Parsing the JSON string to an object
//     var storedTodos = JSON.parse(localStorage.getItem("todos"));
  
//     // If todos were retrieved from localStorage, update the todos array to it
//     if (storedTodos !== null) {
//       todos = storedTodos;
//     }
  
//     // Render todos to the DOM
//     renderTodos();
//   }
  
  function event() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos", JSON.stringify(todos));
  }