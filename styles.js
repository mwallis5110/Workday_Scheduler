//Make time blocks in JS/JQuery
var date = moment().format("MMMM Do YYYY");
var hour = parseInt(moment().format("HH"));

$("#currentDay").text(date);

// for loop from start time to end time (*Use military time)
for (hour = 9; hour <= 18; hour++);
{
  var timeRow = $("<section>");
  var timeColumn = $("<div>");
  var blockText = $("<textarea>");
  var saveButtons = $("<button>");
  saveButtons.addClass("button");
  saveButtons.attr("id", "button" + hour);
  timeRow.append(timeColumn);
  timeRow.append(blockText);
  timeRow.append(saveButtons);
}

// Make & style elements (columns, sizing, timeblock, etc)
// var hourEl = document.createElement("div");
// hourEl.setAttribute('class', 'col-sm-1 hour');
// var descriptionEl = document.getElementsByClassName('row time-block');
// descriptionEl.setAttribute('class', 'col-sm-10')
// var saveButtonEl = document.createElement('button');
// saveButtonEl.setAttribute('class', 'col-sm-1 saveBtn')

//Append each row to the body

// for loop, if i is past/during/future

function colorBlocks() {
  $(".time-block").each(function () {
    for (let i = 0; i < hour; i++) {
      if (i < hour) {
        textAreaEl.addClass("past");
      } else if (i == hour) {
        textAreaEl.addClass("present");
      } else {
        textAreaEl.addClass("future");
      }
    }
  });
}

$(".saveButton").on("click", function () {
  var idSelect = $(this).attr("id");
  var save = $(this).siblings("textarea").val();
  localStorage.setItem(idSelect, save);
});

// Way to select buttons (assign IDs), use IDs as what to save in local storage
// Buttons to save in local storage
// Use DOM manipulation to give all buttons same class/different ID,
//select all buttons via class and onClcik,
// grab buttons and save to LS based on ID
// Use i to grab text from local storage & put in correct box
//assign classes in local storage, reference css
//.append everything
