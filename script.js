// alert("hola");
//display current day using moment.js at the top of the calendar
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

// localStorage.setItem('key', 'value')
$(".saveBtn").click(function () {
  var textValue = $(".text-" + $(this).attr("data-block")).val();
  var textKey = $(this).attr("data-block");
  console.log(textValue);
  localStorage.setItem(textKey, textValue)
});
console.log(localStorage.getItem("9"));
console.log(localStorage.getItem("10"));
console.log(localStorage.getItem("11"));
console.log(localStorage.getItem("12"));
console.log(localStorage.getItem("1p"));
console.log(localStorage.getItem("2p"));
console.log(localStorage.getItem("3p"));
console.log(localStorage.getItem("4p"));
console.log(localStorage.getItem("5p"));
// get item from localStorage put it on the page even if i refresh the browser
 $('.text-9').val(localStorage.getItem('9'))
 $('.text-10').val(localStorage.getItem('10'))
 $('.text-11').val(localStorage.getItem('11'))
 $('.text-12').val(localStorage.getItem('12'))
 $('.text-1p').val(localStorage.getItem('1p'))
 $('.text-2p').val(localStorage.getItem('2p'))
 $('.text-3p').val(localStorage.getItem('3p'))
 $('.text-4p').val(localStorage.getItem('4p'))
 $('.text-5p').val(localStorage.getItem('5p'))
 





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

