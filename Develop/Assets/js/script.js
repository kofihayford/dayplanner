$(document).ready(function () {

    const saveBtn = $(".saveBtn")
    const currentDayEl = $("#currentDay")
    let currentDate = moment().format('dddd MMMM Do YYYY, h:mm a');
    //Create an empty array to load the user's entries in.

    let entries = []

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
    $(".saveBtn").on("click", function (event) {
        // alert("I've been clicked!");
        let id = $(this).closest("div").attr('id');
        console.log(id)
        console.log(event, "this is our event")
        let val = $(`#${id} > textarea`).val()
        //added id so that the function can now dynamically update the right child element in the DOM with the value entered by the user 
        saveLocal(val, id)
        console.log(val)
    });

    //Load the entries from local storage and save them to the text areas 

    function saveLocal(entries, id) {
        localStorage.setItem(`#${id}`, JSON.stringify(entries))
    }

    // localStorage.getItem(`#${id}`) 

    //Use this to make sure I'm grabbing the appropraiate item
    console.log(localStorage.getItem('#9'))

    //Grab the children elements of the main container div in the HTML
    $(".container").children.each

})


// while ( ) {
//     n++;
//     x += n;
//    }

    // Call the functions you created

