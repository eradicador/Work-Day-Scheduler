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
 //moment.js gets hour
moment().hour()
//  Each timeblock is color coded to indicate whether it is in a past, present, or future hour.
//this function gets the color for past, present and future depending on the hour   
function hourColor(){
  //variable to get hours from moment.js 
  var currentH = moment().hours();
  console.log("Current Hour: "+currentH);
  $(".row").each(function(){
    var blockH = parseInt($(this).attr("id"));
    console.log("Block Hour: "+blockH);

    if(blockH < currentH){
      $(this).addClass("past");
       }

       else if(blockH === currentH){
         $(this).removeClass("past");
         $(this).addClass("present");
       }
       else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
       }

  })
}
hourColor();

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

