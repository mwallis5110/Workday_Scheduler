//Make time blocks in JS/JQuery
var date = moment().format("MMMM Do YYYY");
var hour = parseInt(moment().format("HH"));
var formattedTime = "10:00:00"
var time = parseInt(moment(formattedTime, "HH:mm:ss").format("HH:mm:ss"));
$("#currentDay").text(date);
$("#currentHour").text(time);
//Add event listener for save buttons

// for loop from start time to end time (*Use military time)
for (i = 9; i <= 18; i++); {
    var timeRow = $("<section>");
    var timeColumn = $("<div>");
    var blockText = $("<textarea>");
    var saveButtons = $("<button>");
    saveButtons.addClass("buttons");
    saveButtons.attr("id", "button" + i);
}

$(".buttons").on("click", function() {
    var idSelect = $(this).attr("id");
    var save = $(this).siblings("textarea").val();
    localStorage.setItem(idSelect, save);
});

// Make & style elements (columns, sizing, timeblock, etc)
var hourEl = document.createElement("div");
hourEl.setAttribute('class', 'col-sm-1 hour');
var descriptionEl = document.createElement('textarea');
var saveButtonEl = document.createElement('button');
saveButtonEl.setAttribute('class', 'col-sm-1 saveBtn')

// for loop, if i is past/during/future

for (let i = 0; i < hour; i++) {
    if (i < hour) {
        descriptionEl.setAttribute('class', 'event past');
    } else if (i === hour) {
        descriptionEl.setAttribute('class', 'event present');
    } else {
        descriptionEl.setAttribute('class', 'event future')
    }
};


// Way to select buttons (assign IDs), use IDs as what to save in local storage
// Buttons to save in local storage
// Use DOM manipulation to give all buttons same class/different ID, 
//select all buttons via class and onClcik,
// grab buttons and save to LS based on ID
// Use i to grab text from local storage & put in correct box
//assign classes in local storage, reference css 
//.append everything