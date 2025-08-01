import { renderCountries } from "./logic/dom.js";
import { ThemeToggle } from "./logic/components/ThemeToggle.js";
import { toggleTheme } from "./logic/dom.js";

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".App-header-info-themeToggle");

  ThemeToggle(themeToggle);
  themeToggle.addEventListener("click", () => {
    toggleTheme(themeToggle);
  });

  renderCountries("Caribbean");
  const countrySelect = document.getElementById("App-countrySelect");
  countrySelect.addEventListener("change", (event) => {
    renderCountries(event.target.value);
  });
});
