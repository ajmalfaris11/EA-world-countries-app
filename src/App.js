import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

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

  return <div className="world-container">
    {/* header */}
    <h1>Countries of the world</h1>

  </div>;
};

export default App;
