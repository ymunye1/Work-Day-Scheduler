// var to grab elements
var Elnine = $("#9");
var Elten = $("#10");
var Eleleven = $("#11");
var Eltwelve = $("#12");
var Elthirteen = $("#13");
var Elforteen = $("#14");
var Elfifteen = $("#15");
var Elsixteen = $("#16");
var Elseventeen = $("#17");
var ElcurrentDay = $("#currentDay");

// var for specific timeblock textbox and button
var Eltext9 = $("#text9");
var Elbtn9 = $("#btn9");
var Eltext10 = $("#text10");
var Elbtn10 = $("#btn10");
var Eltext11 = $("#text11");
var Elbtn11 = $("#btn11");
var Eltext12 = $("#text12");
var Elbtn12 = $("#btn12");
var Eltext13 = $("#text13");
var Elbtn13 = $("#btn13");
var Eltext14 = $("#text14");
var Elbtn14 = $("#btn14");
var Eltext15 = $("#text15");
var Elbtn15 = $("#btn15");
var Eltext16 = $("#text16");
var Elbtn16 = $("#btn16");
var Eltext17 = $("#text17");
var Elbtn17 = $("#btn17");

// get stored value in textbox stored in local memory
result9 = localStorage.getItem("text9");
// display store value in text box
Eltext9.text(result9);
// specific timeblock button listener. when button is pressed...
Elbtn9.on("click", function () {
  // get the values the user input into the textbox.
  var x = document.getElementById("text9").value;
  //  save values in locale storage for specific timeblock
  localStorage.setItem("text9", x);
});

// display current date
ElcurrentDay.text(moment().format("LL"));

result10 = localStorage.getItem("text10");
Eltext10.text(result10);

Elbtn10.on("click", function () {
  var x = document.getElementById("text10").value;
  localStorage.setItem("text10", x);
});

result11 = localStorage.getItem("text11");
Eltext11.text(result11);

Elbtn11.on("click", function () {
  var x = document.getElementById("text11").value;
  localStorage.setItem("text11", x);
});

result12 = localStorage.getItem("text12");
Eltext12.text(result12);

Elbtn12.on("click", function () {
  var x = document.getElementById("text12").value;
  localStorage.setItem("text12", x);
});

result13 = localStorage.getItem("text13");
Eltext13.text(result13);

Elbtn13.on("click", function () {
  var x = document.getElementById("text13").value;
  localStorage.setItem("text13", x);
});

result14 = localStorage.getItem("text14");
Eltext14.text(result14);

Elbtn14.on("click", function () {
  var x = document.getElementById("text14").value;
  localStorage.setItem("text14", x);
});

result15 = localStorage.getItem("text15");
Eltext15.text(result15);

Elbtn15.on("click", function () {
  var x = document.getElementById("text15").value;
  localStorage.setItem("text15", x);
});

result16 = localStorage.getItem("text16");
Eltext16.text(result16);

Elbtn16.on("click", function () {
  var x = document.getElementById("text16").value;
  localStorage.setItem("text16", x);
});

result17 = localStorage.getItem("text17");
Eltext17.text(result17);

Elbtn17.on("click", function () {
  var x = document.getElementById("text17").value;
  localStorage.setItem("text17", x);
});

//  timeblocks changes  to past, present, or future color based on time
past();
present();
future();

// function to test if the timeblock should be grey
// current time is greater than timeblock it turns to grey
function past() {
  if (moment().format("k") > 9) {
    Elnine.addClass("past");
  }

  if (moment().format("k") > 10) {
    Elten.addClass("past");
  }

  if (moment().format("k") > 11) {
    Eleleven.addClass("past");
  }

  if (moment().format("k") > 12) {
    Eltwelve.addClass("past");
  }

  if (moment().format("k") > 13) {
    Elthirteen.addClass("past");
  }

  if (moment().format("k") > 14) {
    Elforteen.addClass("past");
  }

  if (moment().format("k") > 15) {
    Elfifteen.addClass("past");
  }

  if (moment().format("k") > 16) {
    Elsixteen.addClass("past");
  }

  if (moment().format("k") > 17) {
    Elseventeen.addClass("past");
  }
}

// function to test if the timeblock should be red
// current time is equal than timeblock it turns to red
function present() {
  if (moment().format("k") == 9) {
    Elnine.addClass("present");
  }
  if (moment().format("k") == 10) {
    Elten.addClass("present");
  }
  if (moment().format("k") == 11) {
    Eleleven.addClass("present");
  }
  if (moment().format("k") == 12) {
    Eltwelve.addClass("present");
  }
  if (moment().format("k") == 13) {
    Elthirteen.addClass("present");
  }
  if (moment().format("k") == 14) {
    Elforteen.addClass("present");
  }
  if (moment().format("k") == 15) {
    Elfifteen.addClass("present");
  }
  if (moment().format("k") == 16) {
    Elsixteen.addClass("present");
  }
  if (moment().format("k") == 17) {
    Elseventeen.addClass("present");
  }
}

// function to test if the timeblock should be green
// current time is less than timeblock it turns to green
function future() {
  if (moment().format("k") < 9) {
    Elnine.addClass("future");
  }
  if (moment().format("k") < 10) {
    Elten.addClass("future");
  }
  if (moment().format("k") < 11) {
    Eleleven.addClass("future");
  }
  if (moment().format("k") < 12) {
    Eltwelve.addClass("future");
  }
  if (moment().format("k") < 13) {
    Elthirteen.addClass("future");
  }
  if (moment().format("k") < 14) {
    Elforteen.addClass("future");
  }
  if (moment().format("k") < 15) {
    Elfifteen.addClass("future");
  }
  if (moment().format("k") < 16) {
    Elsixteen.addClass("future");
  }
  if (moment().format("k") < 17) {
    Elseventeen.addClass("future");
  }
}
