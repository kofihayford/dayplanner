$(document).ready(function () {

    const saveBtn = $(".saveBtn")
    const currentDayEl = $("#currentDay")
    let currentDate = moment().format('dddd MMMM Do YYYY, h:mm a');

    // Display the current time using Moment 
    currentDayEl.text(currentDate);

    //Current time versus past time versus future time. Change color of the input area based on time of day. Logic. 
    const currentHour = moment().hour(); console.log(currentHour)
    $(".time-block").each(function () {
        thisHour = parseInt($(this).attr("id"))
        console.log(thisHour)
        if (thisHour < currentHour) {
            $(this).addClass("past")
        } else if (thisHour === currentHour) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        }
    })

    // Create functions that update the appropriate elements of the DOM with the user's inputs. Check the listener and activating functions with console logs to begin with. Create event listener so that it captures the click when the save button is pressed by the user. Activate Local Storage 
    $(".saveBtn").on("click", function () {
        // alert("I've been clicked!");

    });

    //Load the etnries from local storage and save them to the text areas 

    // Call the functions you created


})