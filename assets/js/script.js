var datetime = null,
    date = null;

var update = function () {
  date = moment(new Date())
  datetime.html(date.format("DD MMM YYYY [at] hh:mm:ss a"));
};

$(document).ready(function(){
  datetime = $('#dateTime')
  update();
  setInterval(update, 1000);
});

var cardButtonEl = document.getElementById("#cardBtn")
