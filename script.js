function updateRibbon(deg) {
  console.log("test");

  for (let rule of document.styleSheets[0].cssRules) {
    if (rule.selectorText === ".glow-radius") {
      rule.style.background = `conic-gradient(var(--primary-color) ${deg}deg ,var(--light-ring-bg-color) 0 235deg)`;
    }
    if (rule.selectorText === ".glow-radius::after") {
      rule.style.background = `conic-gradient(var(--primary-color) ${deg}deg ,var(--light-ring-bg-color) 0 235deg)`;
    }
    if (rule.selectorText === ".glow-radius::before") {
      rule.style.background = `conic-gradient(var(--primary-color) ${deg}deg ,var(--light-ring-bg-color) 0 235deg)`;
    }
  }
}

var hours = 0;
var minutes = 0;
var seconds = 0;
var tens = 0;
var appendHours = document.getElementById("hours");
var appendMinutes = document.getElementById("minutes");
var appendSeconds = document.getElementById("seconds");
var appendTens = document.getElementById("centiseconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var buttonLap = document.getElementById("button-lap");
var lapContainer = document.getElementById("lap-container");
var lapten = 0;
var lapmin = 0;
var lapsec = 0;
var laphour = 0;
var lapCount = 1;
var Interval;
var deg = 0;
updateRibbon(deg);

buttonStart.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};

buttonStop.onclick = function () {
  clearInterval(Interval);
};

buttonReset.onclick = function () {
  clearInterval(Interval);
  hours = "00";
  minutes = "00";
  seconds = "00";
  tens = "00";
  deg = 0;
  updateRibbon(deg);
  appendTens.innerHTML = tens;
  appendHours.innerHTML = hours;
  appendMinutes.innerHTML = minutes;
  appendSeconds.innerHTML = seconds;

  buttonStop.classList.add("hide");
  buttonStart.classList.remove("hide");
  lapContainer.innerHTML = "";
  lapCount = 1;
};

function startTimer() {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    deg += 6;
    updateRibbon(deg);
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds <= 9 && seconds > 0) {
    appendSeconds.innerHTML = "0" + seconds;
  } else {
    appendSeconds.innerHTML = seconds;
  }

  if (seconds > 59) {
    deg = 0;
    updateRibbon(deg);
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }

  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }

  if (minutes > 59) {
    hours++;
    appendHours.innerHTML = "0" + hours;
    minutes = 0;
    appendMinutes.innerHTML = "0" + 0;
  }

  if (hours > 9) {
    appendHours.innerHTML = hours;
  }
}

buttonStart.addEventListener("click", function () {
  buttonStart.classList.add("hide");
  buttonStop.classList.remove("hide");
});

buttonStop.addEventListener("click", function () {
  buttonStop.classList.add("hide");
  buttonStart.classList.remove("hide");
});

buttonLap.addEventListener("click", function () {
  
  let lap = document.createElement("div");
  lap.innerHTML = `<span class="lap-count"><i class="bi bi-flag-fill"></i> Lap ${lapCount} </span>
  <span class="currtime">${hours}:${minutes}:${seconds}:${tens}</span>
  <span class="diff">+${Math.abs(hours - laphour)}:${Math.abs(minutes - lapmin)}:${
    Math.abs(seconds - lapsec)
  }:${Math.abs(tens - lapten)}</span>`;
  lap.classList.add("lap");
  
  // lapContainer.appendChild(lap);
  if (lapContainer.firstChild) {
    lapContainer.insertBefore(lap, lapContainer.firstChild);
} else {
    lapContainer.appendChild(lap); 
}
  lapten = Number(tens);
  lapsec = Number(seconds);
  lapmin = Number(minutes);
  laphour = Number(hours);
  lapCount++;

});


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.getElementById('root').classList.toggle("light")
  document.getElementsByClassName('stop-watch-1')[0].classList.toggle("light")
  document.getElementsByClassName('stop-watch-2')[0].classList.toggle("light")
  document.getElementsByClassName('timer')[0].classList.toggle("light")
  document.getElementById('change-mode').classList.toggle("light")
  document.getElementById('cm-icon').classList.toggle("bi-sun-fill")
  document.getElementById('cm-icon').classList.toggle("bi-moon-stars-fill")
  // document?.getElementsByClassName('lap')[0].classList.toggle("light")
  buttonLap.classList.toggle("button-light");
  buttonLap.classList.toggle("button");

  buttonReset.classList.toggle("button-light");
  buttonReset.classList.toggle("button");

  buttonStart.classList.toggle("button-light");
  buttonStart.classList.toggle("button");

  buttonStart.classList.toggle("button-light");
  buttonStart.classList.toggle("button");

  document.getElementsByTagName('html')[0].style.setProperty('--lap-bg', checkbox.checked ? '#cbd5f4' : '#090d19 ');
  document.getElementsByTagName('html')[0].style.setProperty('--lap-border', checkbox.checked ? '#acbcec' : '#090d19');
  document.getElementsByTagName('html')[0].style.setProperty('--main-text-color', checkbox.checked ? "#333" : '#f0f0f0');
  document.getElementsByTagName('html')[0].style.setProperty('--main-bg-color', checkbox.checked ? "#f0f0f0" : '#04060c');
  document.getElementsByTagName('html')[0].style.setProperty('--border-shade', checkbox.checked ? "#7690dd" : '#8690ec67');
  document.getElementsByTagName('html')[0].style.setProperty('--primary-dark-color', checkbox.checked ? "#d7dff8" : '#05031c');
  document.getElementsByTagName('html')[0].style.setProperty('--start-bg', checkbox.checked ? "#cad2ff" : '#151943');
})