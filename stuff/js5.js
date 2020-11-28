import "./styles.css";

// You're gonna need this
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");
//const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const startDay = new Date();
  const remainDay = xmasDay - startDay;
  const rsecond = 1000;
  const rminute = rsecond * 60;
  const rhour = rminute * 60;
  const rday = rhour * 24;
  const seconds = Math.floor((remainDay % rminute) / rsecond);
  const minutes = Math.floor((remainDay % rhour) / rminute);
  const hours = Math.floor((remainDay % rday) / rhour);
  const date = Math.floor(remainDay / rday);
  clockTitle.innerText = `${date < 10 ? `0${date}` : date}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
