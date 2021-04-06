$(document).ready(function () {

    const saveBtn = $(".saveBtn")
    const currentDayEl = $("#currentDay")
    let currentDate = moment().format('dddd MMMM Do YYYY, h:mm a');


    // Display the current time using Moment 
    currentDayEl.text(currentDate);

    //Current time versus past time versus future time. Change color of the input area based on time of day. Logic. 
    const currentHour = moment().hour();
    //console.log(currentHour)
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

    //Select the children of the main container div and apply functions to each of them so that they accept the text which is input to them along with saving to local storage.
    $('.container').children('div').each(function () {
        let id = $(this).attr('id');
        let valueLocal = localStorage.getItem(`#${id}`)

        $(`#${id} > textarea`).val(JSON.parse(valueLocal))
        console.log(valueLocal)
        //.replace(/\\/, " ")   
        console.log('step 2')
    })


    // Create functions that update the appropriate elements of the DOM with the user's inputs. Check the listener and activating functions with console logs to begin with. Create event listener so that it captures the click when the save button is pressed by the user. Activate Local Storage 
    saveBtn.on("click", function (event) {

        // alert("I've been clicked!");
        let id = $(this).closest("div").attr('id');

        let val = $(`#${id} > textarea`).val()

        //added id so that the function can now dynamically update the right child element in the DOM with the value entered by the user 
        saveLocal(val, id)
        console.log('step 1')
        console.log(val)
    });

    //Load the entries from local storage and save them to the text areas 
    function saveLocal(entries, id) {
        localStorage.setItem(`#${id}`, JSON.stringify(entries))
    }

    //Grab the children elements of the main container div in the HTML
    $(".container").children.each

});