alert("hola");



init();
storeTodos();
function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTodos !== null) {
      todos = storedTodos;
    }
  
    // Render todos to the DOM
    renderTodos();
  }
  
  function storeTodos() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos", JSON.stringify(todos));
  }