
var saveBTN = $(".btn")
var currentDay = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a")
var currentHour = dayjs().format("HH")
var todo = document.querySelector(".description")
var hour9 = document.querySelector("#hour-9")
var hour10 = document.querySelector("#hour-10")
var hour11 = document.querySelector("#hour-11")
var hour12 = document.querySelector("#hour-12")
var hour13 = document.querySelector("#hour-13")
var hour14 = document.querySelector("#hour-14")
var hour15 = document.querySelector("#hour-15")
var hour16 = document.querySelector("#hour-16")
var hour17 = document.querySelector("#hour-17")

saveBTN.on("click", function (event) {
  event.preventDefault()
  console.log(event)
localStorage.setItem("todoInput", todo.value)
})

$(function () {
  var todoInput = localStorage.getItem("todoInput")
  todo.textContent = todoInput
})

$('#currentDay').text(currentDay)
$(function () {
  if (currentHour === "09") {
    hour9.setAttribute("class", "row time-block present")

    
  } else if (currentHour < "09") {
    hour9.setAttribute("class", "row time-block future")
  } else {
    hour9.setAttribute("class", "row time-block past")
  }

});
$(function () {
  if (currentHour === "10") {
    hour10.setAttribute("class", "row time-block present")

    
  } else if (currentHour < "10") {
    hour10.setAttribute("class", "row time-block future")
  } else {
    hour10.setAttribute("class", "row time-block past")
  }
});
$(function () {
  if (currentHour === "11") {
    hour11.setAttribute("class", "row time-block present")

    
  } else if (currentHour < "11") {
    hour11.setAttribute("class", "row time-block future")
  } else {
    hour11.setAttribute("class", "row time-block past")
  }
});
$(function () {
  if (currentHour === "12") {
    hour12.setAttribute("class", "row time-block present")

    
  } else if (currentHour < "12") {
    hour12.setAttribute("class", "row time-block future")
  } else {
    hour12.setAttribute("class", "row time-block past")
  }
});
$(function () {
  if (currentHour === "13") {
    hour13.setAttribute("class", "row time-block present")

    
  } else if (currentHour < "13") {
    hour13.setAttribute("class", "row time-block future")
  } else {
    hour13.setAttribute("class", "row time-block past")
  }
});
$(function () {
  if (currentHour === "14") {
    hour14.setAttribute("class", "row time-block present")

    
  } else if (currentHour < "14") {
    hour14.setAttribute("class", "row time-block future")
  } else {
    hour14.setAttribute("class", "row time-block past")
  }
});
$(function () {
  if (currentHour === "15") {
    hour15.setAttribute("class", "row time-block present")

    
  } else if (currentHour < "15") {
    hour15.setAttribute("class", "row time-block future")
  } else {
    hour15.setAttribute("class", "row time-block past")
  }
});
$(function () {
  if (currentHour === "16") {
    hour16.setAttribute("class", "row time-block present")

    
  } else if (currentHour < "16") {
    hour16.setAttribute("class", "row time-block future")
  } else {
    hour16.setAttribute("class", "row time-block past")
  }
});
$(function () {
  if (currentHour === "17") {
    hour17.setAttribute("class", "row time-block present")
    console.log("present")
    
  } else if (currentHour < "17") {
    hour17.setAttribute("class", "row time-block future")
  } else {
    hour17.setAttribute("class", "row time-block past")
  }
});