import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // Stable API
        const res = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,cca3");
        const sorted = res.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sorted);
      } catch (err) {
        console.error("Failed to fetch countries:", err);
      }
    };

    fetchCountries();
  }, []);

  const speakCountry = (name) => {
    const utter = new SpeechSynthesisUtterance(name);
    speechSynthesis.cancel();
    speechSynthesis.speak(utter);
  };

  return (
    <div className="world-container">
      <h1 className="title">🌍 Countries of the World</h1>

      <div className="countries-grid">
        {countries.map((country) => (
          <div
            key={country.cca3}
            className="country-card"
            onClick={() => speakCountry(country.name.common)}
          >
            <div className="flagContainer">
              <img
                src={country.flags.png}
                alt={country.name.common}
                loading="lazy"
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
