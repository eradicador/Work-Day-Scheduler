//display current day using moment.js at the top of the calendar
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

//when i clicked the saveBtn calls this function()
$(".saveBtn").click(function () {
  //to get the value and the key the function selects the attribute in .text-, .val() returns the value attribute
  var textValue = $(".text-" + $(this).attr("data-block")).val();
  //to get the key $(this) selects the attribute from data-block
  var textKey = $(this).attr("data-block");
  // saved ('key' and 'value')to local storage
  localStorage.setItem(textKey, textValue)
});

//get the value from localStorage put it on the page even if i refresh the browser
//with jquery selector: select class .text-9 to 5p, .val returns the value attribute from key in the local Storage
$('.text-9').val(localStorage.getItem('9'))
$('.text-10').val(localStorage.getItem('10'))
$('.text-11').val(localStorage.getItem('11'))
$('.text-12').val(localStorage.getItem('12'))
$('.text-1p').val(localStorage.getItem('1p'))
$('.text-2p').val(localStorage.getItem('2p'))
$('.text-3p').val(localStorage.getItem('3p'))
$('.text-4p').val(localStorage.getItem('4p'))
$('.text-5p').val(localStorage.getItem('5p'))
//moment.js gets military hour 
moment().hour()
//  Each timeblock is color coded to indicate whether it is in a past, present, or future hour.
//this function gets the color for past, present and future depending on the hour   
function hourColor() {
  //variable to get hours from moment.js 
  var currentH = moment().hours();
  //jquery selects a class row, .each makes function to run for each matched element. 
  $(".row").each(function () {
    //get the attribute id 
    var blockH = parseInt($(this).attr("id"));
    //the `if` conditional statement is comparing if the blockH is less than the current hour   
    if (blockH < currentH) {
      $(this).addClass("past");
    }
    // if the first condition is false, `else if ` is checking if blockH is equal to current hour 
    else if (blockH === currentH) {
      //$(this) selects and removes the `past` class 
      $(this).removeClass("past");
      //$(this) selects and adds the `present` class
      $(this).addClass("present");
    }
    //if the `if` and `else if` condition are false `else` removes `past` and `present` classes and adds the `future` class 
    else {
      //$(this) selects and removes the `past` class 
      $(this).removeClass("past");
      //$(this) selects and removes the `present` class
      $(this).removeClass("present");
      //$(this) selects and adds the `future` class
      $(this).addClass("future");
    }
  })
}
//calls the hourColor function
hourColor();