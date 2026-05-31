import { useState } from "react";
import Navbar from "../components/Layout/Navbar";
import SearchBar from "../components/Explore/SearchBar";
import CountryGrid from "../components/Explore/CountryGrid";
import useCountries from "../hooks/useCountries";

const ExplorePage = () => {
  const { countries, loading, error } =
    useCountries();

  const [searchTerm, setSearchTerm] =
    useState("");

  const filteredCountries =
    countries.filter(country =>
      country.name.common
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Explore Countries</h1>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={
            setSearchTerm
          }
        />

        <CountryGrid
          countries={
            filteredCountries
          }
        />
      </div>
    </>
  );
};

export default ExplorePage;