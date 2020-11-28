// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select");
const e = document.getElementById("country");

const COUNTRY_LS = "country",
  SHOWIG_CN = "showing";

function saveCountry() {
  var selected = e.options[e.selectedIndex].value;
  localStorage.setItem(COUNTRY_LS, selected);
}

function selectCountry(event) {
  event.preventDefault();
  const countryValue = select.value;
  saveCountry(countryValue);
}

function askForCountry() {
  select.classList.add(SHOWIG_CN);
  select.addEventListener("change", selectCountry);
}

function loadCountry() {
  const selected = localStorage.getItem(COUNTRY_LS);
  if (selected) {
    const option = document.querySelector(
      `select.js-index option[value="${selected}"]`
    );
    option.selected = true;
  } else {
    askForCountry();
  }
}

function init() {
  loadCountry();
}

init();
