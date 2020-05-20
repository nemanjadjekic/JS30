function secondsTick() {
  const elem = document.querySelector(".second-hand");
  const date = new Date();
  const sec = date.getSeconds();
  const secDegree = (sec / 60) * 360 + 90;
  elem.style.transformOrigin = "right center";
  elem.style.transform = `rotate(${secDegree}deg)`;
}

function minutesTick() {
  const elem = document.querySelector(".min-hand");
  const date = new Date();
  const min = date.getMinutes();
  const minDegree = (min / 60) * 360 + 90;
  elem.style.transformOrigin = "right center";
  elem.style.transform = `rotate(${minDegree}deg)`;
}

function hoursTick() {
  const elem = document.querySelector(".hour-hand");
  const date = new Date();
  const min = date.getHours();
  const minDegree = (min / 12) * 360 + 90;
  elem.style.transformOrigin = "right center";
  elem.style.transform = `rotate(${minDegree}deg)`;
}

function clock() {
    secondsTick();
    minutesTick();
    hoursTick();
}

setInterval(clock, 1000);
