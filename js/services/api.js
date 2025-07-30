import {
  API_BASE_URL,
  API_COMMON_FIELDS_URL,
  SUBREGIONS,
} from "../constants.js";

export const getCountriesInfo = async (subregion) => {
  let FINAL_URL = "";

  if (subregion === SUBREGIONS[0]) {
    FINAL_URL = `${API_BASE_URL}/${SUBREGIONS[0]}?${API_COMMON_FIELDS_URL}`;
  } else if (subregion === SUBREGIONS[1]) {
    FINAL_URL = `${API_BASE_URL}/${SUBREGIONS[1]}?${API_COMMON_FIELDS_URL}`;
  } else if (subregion === SUBREGIONS[2]) {
    FINAL_URL = `${API_BASE_URL}/${SUBREGIONS[2]}?${API_COMMON_FIELDS_URL}`;
  } else if (subregion === SUBREGIONS[3]) {
    FINAL_URL = `${API_BASE_URL}/${SUBREGIONS[3]}?${API_COMMON_FIELDS_URL}`;
  }

  try {
    const data = await fetch(FINAL_URL);
    const jsonData = await data.json();
    return jsonData;
  } catch (e) {
    console.log(e);
  }
};
