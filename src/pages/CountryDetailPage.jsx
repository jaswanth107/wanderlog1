import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import CountryInfo from "../components/CountryDetail/CountryInfo";
import ActionButtons from "../components/CountryDetail/ActionButtons";

const CountryDetailPage = () => {
  const { code } = useParams();

  const [country, setCountry] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchCountry =
      async () => {
        const response =
          await fetch(
            `https://restcountries.com/v3.1/alpha/${code}`
          );

        const data =
          await response.json();

        setCountry(data[0]);
        setLoading(false);
      };

    fetchCountry();
  }, [code]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Navbar />

      <CountryInfo
        country={country}
      />

      <ActionButtons
        country={country}
      />
    </>
  );
};

export default CountryDetailPage;