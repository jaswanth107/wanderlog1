const BASE_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  const res = await fetch(
    `${BASE_URL}/all?fields=name,flags,cca3,capital,population,region`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  return await res.json();
};

export const getCountryByCode = async (code) => {
  const res = await fetch(`${BASE_URL}/alpha/${code}`);

  if (!res.ok) {
    throw new Error("Failed to fetch country");
  }

  const data = await res.json();

  return Array.isArray(data) ? data[0] : data;
};