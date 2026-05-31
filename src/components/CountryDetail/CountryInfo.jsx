const CountryInfo = ({
  country,
}) => {
  return (
    <div className="country-info">
      <img
        src={country.flags?.png}
        alt={country.name?.common}
        width="300"
      />

      <h1>
        {country.name?.common}
      </h1>

      <p>
        <strong>Capital:</strong>{" "}
        {country.capital?.[0] ||
          "N/A"}
      </p>

      <p>
        <strong>Region:</strong>{" "}
        {country.region}
      </p>

      <p>
        <strong>Population:</strong>{" "}
        {country.population?.toLocaleString()}
      </p>

      <p>
        <strong>Area:</strong>{" "}
        {country.area?.toLocaleString()}{" "}
        km²
      </p>

      <p>
        <strong>Sub Region:</strong>{" "}
        {country.subregion}
      </p>

      <p>
        <strong>Timezones:</strong>{" "}
        {country.timezones?.join(
          ", "
        )}
      </p>
    </div>
  );
};

export default CountryInfo;