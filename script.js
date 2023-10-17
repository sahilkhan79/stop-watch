let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

startBtn.onclick = () => {
  timer = true;
  stopWatch();
};

stopBtn.onclick = () => {
  timer = false;
  alert(printResult);
  printResult();
};

resetBtn.onclick = () => {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  counts = 0;
  hr.innerHTML = "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
  count.innerHTML = "00";
};

let hour = 0;
let minute = 0;
let second = 0;
let counts = 0;

stopWatch = () => {
  if (timer) {
    counts++;
  }
  if (counts == 100) {
    second++;
    counts = 0;
  }
  if (second == 60) {
    minute++;
    second = 0;
  }
  if (minute == 60) {
    hour++;
    minute = 0;
    second = 0;
  }

  let hrString = hour;
  let minString = minute;
  let secString = second;
  let countString = counts;
  if (hrString < 10) {
    hrString = "0" + hrString;
  }
  if (minString < 10) {
    minString = "0" + minString;
  }
  if (secString < 10) {
    secString = "0" + secString;
  }
  if (countString < 10) {
    countString = "0" + countString;
  }
  hr.innerHTML = hrString;
  min.innerHTML = minString;
  sec.innerHTML = secString;
  count.innerHTML = countString;
  setTimeout(stopWatch, 10);

  function printResult() {
    record.innerHTML = hrString + minString + secString + countString;
  }
};
