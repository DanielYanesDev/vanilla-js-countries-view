import { renderCountries } from "./logic/dom.js";

document.addEventListener("DOMContentLoaded", () => {
  renderCountries("Caribbean");
});

const countrySelect = document.getElementById("App-countrySelect");
countrySelect.addEventListener("change", (event) => {
  renderCountries(event.target.value);
});
