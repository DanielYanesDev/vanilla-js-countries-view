export const createCountryCard = (country) => {
  const article = document.createElement("article");
  article.className = "App-countryCard";

  const img = new Image();
  img.className = "App-countryCard-image is-loading";
  img.src = country.flags.png;
  img.alt = `Flag of ${country.name.official}`;
  img.onload = () => img.classList.remove("is-loading");

  const content = `
    <h2 class="App-countryCard-name">
      <span class="App-countryCard-name-highlight">Name:</span> ${
        country.name.official
      }
    </h2>

    <p class="App-countryCard-capital" data-label="Capital">
      <span class="App-countryCard-capital-highlight">Capital:</span>
      ${country.capital || "N/A"}
    </p>

    <p class="App-countryCard-region" data-label="Region">
      <span class="App-countryCard-region-highlight">Region:</span>
      ${country.region || "N/A"}
    </p>

    <p class="App-countryCard-subregion" data-label="Subregion">
      <span class="App-countryCard-subregion-highlight">Subregion:</span>
      ${country.subregion || "N/A"}
    </p>

    <p class="App-countryCard-population" data-label="Population">
      <span class="App-countryCard-population-highlight">Population:</span>
      ${country.population?.toLocaleString() || "N/A"}
    </p>

    <p class="App-countryCard-area" data-label="Area">
      <span class="App-countryCard-area-highlight">Area:</span>
      ${country.area?.toLocaleString() || "N/A"} km²
    </p>

    <p class="App-countryCard-languages" data-label="Languages">
      <span class="App-countryCard-languages-highlight">Languages:</span>
      ${
        country.languages && Object.keys(country.languages).length > 0
          ? Object.values(country.languages).join(", ")
          : "No languages available"
      }
    </p>

    <p class="App-countryCard-currencies" data-label="Currencies">
      <span class="App-countryCard-currencies-highlight">Currencies:</span>
      ${
        country.currencies && Object.keys(country.currencies).length > 0
          ? Object.values(country.currencies)
              .map((currency) => `${currency.name} (${currency.symbol})`)
              .join(", ")
          : "No currencies available"
      }
    </p>

    <a
      class="App-countryCard-mapButton"
      href="${country.maps.googleMaps}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View ${country.name.official} on Google Maps"
      title="View on Google Maps"
    >
      <svg
        class="App-countryCard-mapIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24"
        aria-hidden="true"
      >
        <path
          d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"
        />
      </svg>
      <span class="App-countryCard-mapText">View map</span>
    </a>
  `;

  article.appendChild(img);
  article.insertAdjacentHTML("beforeend", content);
  return article;
};
