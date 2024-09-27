import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);

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

  // Function to speak the country's name
  const speakCountryName = (countryName) => {
    const utterance = new SpeechSynthesisUtterance(countryName);
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="world-container">
      <h1>Countries of the World</h1>
      <div className="countries-grid">
        {countries.map((country) => (
          <div
            key={country.cca3}
            className="country-card"
            onClick={() => speakCountryName(country.name.common)}
          >
            <div className="flagContainer">
              <img
                src={country.flags.svg}
                alt={country.name.common}
                className="country-flag"
              />
            </div>
            <div className="nameContainer">
              <h2>{country.name.common}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
