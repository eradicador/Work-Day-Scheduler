# Work Day Scheduler

## Description
This is an application for a simple calendar that allows the user to save events for each hour of the day from 9am to 5pm. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. The application uses moment.js library to work with date and time. The user will be able to save events in every hour so the user can manage his/her busy schedule. the calendar/planner will show on the top the current date including the day. Each timeblock is color coded to indicate past, present or future hour. when the user clicks the time block next to the hour he/she will able to type an event and if the user clicks the save button for that timeblock he/she will be able to save that event into the `local storage` and if the user refresh the page or closes the browser the events will be there on the calendar time blocks.

# screenshot
<img src ="/assets/images/Screenshot.png" width="500">

# link to deployed app
https://github.com/eradicador/Work-Day-Scheduler

# css file
lines 9 and 10 added 100% height and width to textarea so it will cover the whole area 
line 12 added padding to textarea to match the demo

line 34 added padding-top to match the demo

line 37 changed border-radius to border-top:10px to look more like the demo

lines 54,62 and 70 added border-top and bottom radius to match the demo for past, present and future classes

# html file
line 13 linked my css file to html file

lines 26,35,44,53,62,70,79,88 and 97 added a row with an id

lines 28,37,46,55,64,72,81,90 and 99 added columm-1 time-block and hour classes

lines 30,39,48,57,66,74,83,92 and 101 added columm-10 with padding-0, textarea and description, text-a number classes

lines 32,41,50,59,68,76,85,94 and 103 added columm-1 with padding-4, far fa-save button and center it and data-block

line 109 linked my script.js file to my html file

# script.js file
line 2 display current day using moment.js at the top of the calendar

line 5 when i clicked the saveBtn calls this function()

line 7 to get the value and the key the function selects the attribute in .text-, .val() returns the value attribute

line 9 to get the key $(this) selects the attribute from data-block

line 11 saved ('key' and 'value')to local storage

lines 16 to 24 with jquery selector: select class .text-9 to 5p, .val returns the value attribute from key in the local Storage

line 26 moment.js gets military hour

line 29 this function gets the color for past, present and future depending on the hour

line 31 variable to get hours from moment.js 

line 33 jquery selects a class row, .each makes function to run for each matched element. 

line 35 get the attribute id

line 37 the `if` conditional statement is comparing if the blockH is less than the current hour   

line 41 if the first condition is false, `else if ` is checking if blockH is equal to current hour 

line 43 $(this) selects and removes the `past` class

line 45 $(this) selects and adds the `present` class

line 48 if the `if` and `else if` condition are false `else` removes `past` and `present` classes and adds the `future` class 

line 50 $(this) selects and removes the `past` class

line 52 $(this) selects and removes the `present` class

line 54 $(this) selects and adds the `future` class

line 59 calls the hourColor function

# license
MIT License

Copyright (c) [2020] [Michael Amaya]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.