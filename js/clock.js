const clockbox = document.querySelector("#clock-box");
const clock = clockbox.querySelector("#clock");
const todayDate = clockbox.querySelector("#date");
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const year = String(date.getFullYear()).padStart(4, "0")
  const month = String((date.getMonth()+1)).padStart(2, "0")
  const nowdate = String(date.getDate()).padStart(2, "0")
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  todayDate.innerText = `${year}.${month}.${nowdate}`;
}

getClock();
setInterval(getClock, 1000);