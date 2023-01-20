// Moment JS for the date in the jumbrotron
var datetime = null,
    date = null;

var update = function () {
  date = moment(new Date())
  datetime.html(date.format("dddd Do MMM YYYY, HH:mm:ss"));
};


$(document).ready(function(){
  datetime = $('#currentDay')
  update();
  setInterval(update, 1000 * 60)
});