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
  