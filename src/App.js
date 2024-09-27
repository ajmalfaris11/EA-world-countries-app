import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  // update the countries values
  const [countries, setCountries] = useState([]);

  // fetch the data while loading the app with help of useEffect hook
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="world-container">
      {/* header */}
      <h1>Countries of the World</h1>
      <div className="countries-grid">
        {countries.map((country) => (
          <div key={country.cca3} className="country-card">
            <div>
              <img
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
                className="country-flag"
              />
            </div>
            <div>
              <h2>{country.name.common}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
