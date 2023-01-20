// Moment JS for the date in the jumbrotron
$("#currentDay").text(moment().format("dddd Do MMM YYYY"));

function timeBlockState() {
  // Gets the current hour and data index of the hours timeblock store them in variables
  let currentHour = moment().hour();
  const timeBlockHrs = $(".time-block");

  for (let i = 0; i < timeBlockHrs.length; i++) {
    const currentTimeBlock = $(timeBlockHrs[i]).attr("data-index");
    // If the currentHour matches the currentTimeBlock - it adds a class to change the timeblock colour to match 'Present'
    // If the currentHour is less than the currentTimeBlock - it adds a class to change the timeblock colour to match 'Future'
    // If the currentHour is greater than the currentTimeBlock - it adds a class to change the timeblock colour to match 'Past'
    if (currentHour == currentTimeBlock) {
        $(timeBlockHrs[i]).addClass("present");
    } else if (currentHour < currentTimeBlock) {
      $(timeBlockHrs[i]).addClass("future");
    } else if (currentHour > currentTimeBlock) {
      $(timeBlockHrs[i]).addClass("past");
    }
  }
}