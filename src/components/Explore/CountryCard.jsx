import { Link } from "react-router-dom";

const CountryCard = ({
  country,
}) => {
  return (
    <div className="country-card">
      <img
        src={country.flags?.png}
        alt={country.name?.common}
        className="country-flag"
      />

      <h3>
        {country.name?.common}
      </h3>

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
        {country.population.toLocaleString()}
      </p>

      <Link
        to={`/country/${country.cca3}`}
      >
        View Details
      </Link>
    </div>
  );
};

export default CountryCard;