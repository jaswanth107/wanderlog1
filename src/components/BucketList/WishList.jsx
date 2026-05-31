const WishList = ({ wishlist }) => {
  if (wishlist.length === 0) {
    return (
      <p>No countries in your bucket list.</p>
    );
  }

  return (
    <div className="country-grid">
      {wishlist.map(country => (
        <div
          key={country.cca3}
          className="country-card"
        >
          <img
            src={country.flags?.png}
            alt={country.name?.common}
            width="150"
          />

          <h3>
            {country.name?.common}
          </h3>

          <p>
            {country.region}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WishList;