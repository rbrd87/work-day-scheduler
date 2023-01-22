// Moment JS for the date in the jumbrotron
// Changed to setInterval so that the page would refresh and the changing of the timeBlock colours would be more dynamic
setInterval(function () {
    $("#currentDay").text(moment().format("dddd Do MMM YYYY"))
    $("#currentTime").text(moment().format("HH:mm:ss"));
}, 1000);

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
            $(timeBlockHrs[i]).addClass("past").attr("disabled", true)
        }
    }
}

// Setting an on click function for the saveBtn
$(".saveBtn").on("click", function () {
    // Using 'this' gets the siblings of the saveBtn, (the div containing the hour and the textarea for the description)
    // Saves the text with the class .hour into a variable called eventTime
    let eventTime = $(this).siblings(".hour").text()
    // Saves the text value of the users text entered in the textarea to a variable called eventDescription
    let eventDescription = $(this).siblings(".description").val()
    // Using the above variables, I am able to save the items into an object in local storage
    localStorage.setItem(eventTime, eventDescription)
    console.log(localStorage)
})

// Created a function to retrieve the saved items in local storage and display them in the right hour blocks
function retrieveEvent() {
    // The function targets the .hour class and will perform the function 'for each' hour 
    $(".hour").each(function () {
        // First of all, the function will get the hour blocks label e.g 9am and store it in the variable hourBlockLabel (using 'this' as we are already targetting .hour class)
        let hourBlockLabel = $(this).text()
        // The function will then 'get' a key that matches the text from the hourBlockLabel variable
        let savedTime = localStorage.getItem(hourBlockLabel)
        // When it finds a match, the function will then target the siblings of that particular hour block and populate the field with the class .description
        $(this).siblings(".description").val(savedTime)
    })
}

// Created a clear all button to delete all events from the work planner.
$(".clearAll").on("click", function () {
    // When the button is clicked a confirmation dialog box will show.
    let deleteConfirm = confirm("Are you sure you want to clear all events?")
    // If the user clicks okay it clears everything from local storage and then reloads the page to show the empty fields
    if (deleteConfirm === true) {
        localStorage.clear()
        location.reload();
    } else {
        // If the user click cancel it will not delete anything
        alert("No events deleted")
    }
})

// Setting an on click function for the saveBtn
$('.trashBtn').on('click', function () {
    var eventTime = $('.saveBtn').siblings('.hour').text()
    var eventDescription = $('.saveBtn').siblings('.description').val()
    localStorage.clear(eventTime, eventDescription)
    location.reload();
})

// Calling the timeBlockState function to display the correct colours needed
timeBlockState();
// Calling the retrieveEvent function to display the saved events
retrieveEvent();