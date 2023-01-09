let hour = document.querySelector(".hour");
let minut = document.querySelector(".minuts");
let sec = document.querySelector(".sec");
let aM_pm = document.querySelector(".ampm");
let days = document.querySelector(".days");

setInterval(showTime, 1000);

function showTime() {
  let date = new Date();

  let arr = days.children;
  for (let i = 0; i < arr.length; i++) {
    if (date.getDay() === +arr[i].getAttribute("id")) {
      arr[i].classList.add("active");
    }
  }

  let am_pm = "AM";
  if (date.getHours() > 12) {
    am_pm = "PM";
  }
  if (date.getHours() == 0) {
    am_pm = "AM";
  }
  let houre =
    date.getHours() > 12
      ? date.getHours() - 12
      : date.getHours() == 0
      ? 12
      : date.getHours();
  houre = checkTime(houre);

  let mintex = checkTime(date.getMinutes());

  let sectex = checkTime(date.getSeconds());

  alarm(houre, mintex, sectex);

  hour.innerHTML = houre + ":";
  minut.innerHTML = mintex + ":";
  sec.innerHTML = sectex;
  aM_pm.innerHTML = am_pm;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

var x = document.createElement("AUDIO");
x.setAttribute("src", "horse.mp3");

function alarm(hours, minn, secc) {
  var HOUR = document.getElementById("Hour");
  var MIN = document.getElementById("Min");
  let Sec = document.getElementById("Sec");
  var hourval = HOUR.value;
  var minval = MIN.value;
  let secval = Sec.value;

  if (checkTime(hourval) == hours && checkTime(minval) == minn) {
    x.play();
  } else {
    x.pause();
    x.load();
  }
}

function myFunction() {
  document.getElementById("alarm").submit();
}
