//Make time blocks in JS/JQuery
var date = moment().format("MMMM Do YYYY");
var hour = parseInt(moment().format("HH"));

$("#currentDay").text(date);

// for loop from start time to end time (*Use military time)
for (let i = 9; i <= 18; i++) {
  //Adds dynamic elements to index
  var timeContainer = $(".container");
  var timeRow = $("<section>");
  var timeColumn = $("<div>");
  var blockText = $("<textarea>");
  var saveButtons = $("<button>");

  //Sets classes and IDs to each part of each time blocks
  saveButtons.attr("id", "button" + i);
  saveButtons.attr("class", "saveButton");
  timeRow.attr("class", "timeRow");
  timeColumn.attr("class", "col-sm-1 hour");
  blockText.attr("class", "col-sm-10");

  //Styles each time block according to what time it is (via styles.css)
  if (i < hour) {
    timeRow.addClass("past");
  } else if (i == hour) {
    timeRow.addClass("present");
  } else {
    timeRow.addClass("future");
  }

  //Ternary operator to convert military time to regular time
  // if (hour > 12) {
  //    - 12 + " P.M.";
  // // } else {
  // //   if (hours < 10 && hours > 12) {
  // //     return "0" + hours;
  //   } else {
  //     return hour + " A.M.";
  //   }
  

  timeColumn.text(i);
  timeRow.append(timeColumn);
  timeRow.append(blockText);
  timeRow.append(saveButtons);
  timeContainer.append(timeRow);
}

//Stores notes in local storage
$(".saveButton").on("click", function () {
  var idSelect = $(this).attr("id");
  var save = $(this).siblings("textarea").val();
  localStorage.setItem(idSelect, save);
});

//Pulls notes from local storage. Uses ID of each text area to add notes to the correct time block
for (let i = 9; i <= 18; i++) {
  localStorageContent = localStorage.getItem("button" + i);
  $("#button" + i)
    .siblings("textarea")
    .val(localStorageContent);
}
