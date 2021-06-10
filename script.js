let cDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
let currentTime = moment().format('h:mm:ss a');
let sevenAm = $("7am");
let eightAm = $("#8am");
let nineAm = $("#9am");
let tenAm = $("#10am");
let elevenAm = $("#11am");
let twelvePm = $("#12pm");
let onePm = $("#13pm");
let twoPm = $("#14pm");
let threePm = $("#15pm");
let fourPm = $("#16pm");
let fivePm = $("#17pm");
let sixPm = $("#18pm");
let hour = moment().hours();
let userInput;
let hourSpan;

let interval = setInterval(function() {
  let momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                      + momentNow.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(cDate + " ");
}, 100);


function initPage() {
console.log("Current Hour " + hour);
  let init7 = JSON.parse(localStorage.getItem("07:00 am"));
  sevenAm.val(init7);

    console.log("Current Hour " + hour);
  let init8 = JSON.parse(localStorage.getItem("08:00 am"));
  eightAm.val(init8);
    
  console.log("Current Hour " + hour);
  let init9 = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(init9);

 let init10 = JSON.parse(localStorage.getItem("10:00 am"))
  tenAm.val(init10);
  
  let init11 = JSON.parse(localStorage.getItem("11:00 am"))
  elevenAm.val(init11);
  
 let init12 = JSON.parse(localStorage.getItem("12:00 pm"))
  twelvePm.val(init12);
  
  let init1 = JSON.parse(localStorage.getItem("1:00 pm"))
  onePm.val(init1);
  
  let init2 = JSON.parse(localStorage.getItem("2:00 pm"))
  twoPm.val(init2);
  
  let init3 = JSON.parse(localStorage.getItem("3:00 pm"))
  threePm.val(init3);
 
  let init4 = JSON.parse(localStorage.getItem("4:00 pm"))
  fourPm.val(init4);
  
  let init5 = JSON.parse(localStorage.getItem("5:00 pm"))
  fivePm.val(init5);
  
  let init6 = JSON.parse(localStorage.getItem("6:00 pm"))
  sixPm.val(init6);
} 



function background () {
  $(".form-control").each(function () {
      var timeTest = parseInt($(this).attr("id"));

      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);

      if (hour > timeTest) {

          $(this).addClass("past");
      } else if (hour < timeTest) {

          $(this).addClass("future");
      } else {

          $(this).addClass("present");
      }
  });
}





$(document).ready(function(){

  initPage()

  background()

  $(".saveBtn").on("click", function(){

    userInput = $(this).siblings(".form-control").val().trim();

    console.log(userInput);

    hourSpan = $(this).siblings(".input-group-prepend").text().trim();

    console.log(hourSpan);

    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })
  

});
  
  