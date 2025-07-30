import { getCountriesInfo } from "../services/api.js";
import { createCountryCard } from "./components/CountryCard.js";
import { renderPagination } from "./components/Pagination.js";

export const renderCountries = async (subregion = "Caribbean") => {
  const countriesSection = document.querySelector(".App-countriesView");
  const paginationContainer = document.querySelector(".App-pagination");
  const loadingElement = document.querySelector(".App-loading");

  countriesSection.innerHTML = "";
  paginationContainer.innerHTML = "";

  loadingElement.style.display = "flex";

  try {
    const countriesInfo = await getCountriesInfo(subregion);
    const countriesPerPage = 9;
    const totalPages = Math.ceil(countriesInfo.length / countriesPerPage);

    let currentPage = 1;

    const renderPage = (page) => {
      countriesSection.innerHTML = "";
      const start = (page - 1) * countriesPerPage;
      const end = start + countriesPerPage;
      const currentCountries = countriesInfo.slice(start, end);

      currentCountries.forEach((country) => {
        const card = createCountryCard(country);
        countriesSection.appendChild(card);
      });

      renderPagination({
        container: paginationContainer,
        totalPages,
        currentPage: page,
        onPageChange: (newPage) => {
          currentPage = newPage;
          renderPage(newPage);
        },
      });
    };

    renderPage(currentPage);
  } catch (e) {
    console.error("Error rendering countries:", e);
    countriesSection.innerHTML =
      "<p style='color:red; text-align:center;'>Failed to load countries.</p>";
  } finally {
    loadingElement.style.display = "none";
  }
};
