//Uses moment.js to determine the current time
var date = moment().format("MMMM Do YYYY");
var hour = parseInt(moment().format("HH"));

$("#currentDay").text(date);

for (let i = 9; i <= 18; i++) {
  var timeContainer = $(".container");
  var timeRow = $("<section>");
  var timeColumn = $("<div>");
  var blockText = $("<textarea>");
  var saveButtons = $("<button>");
  saveButtons.attr("id", "button" + i);
  saveButtons.attr("class", "col-sm-1 saveBtn");
  timeRow.attr("class", "timeRow");
  timeColumn.attr("class", "col-sm-1 hour");
  blockText.attr("class", "col-sm-10");
  blockText.attr("id", "textarea" + i);
  saveButtons.text("💾");

  if (i < hour) {
    timeRow.addClass("past");
  } else if (i == hour) {
    timeRow.addClass("present");
  } else {
    timeRow.addClass("future");
  }

  timeColumn.text(i);
  timeRow.append(timeColumn);
  timeRow.append(blockText);
  timeRow.append(saveButtons);
  timeContainer.append(timeRow);
}

$(".saveBtn").on("click", function () {
  var idSelect = $(this).attr("id");
  var save = $(this).siblings("textarea").val();
  localStorage.setItem(idSelect, save);
  // console.log(localStorage.getItem("button9"));
});

for (let i = 9; i <= 18; i++) {
  localStorageContent = localStorage.getItem("button" + i);
  console.log(localStorageContent);
 
  $("#textarea" + i).val(localStorageContent);
}
