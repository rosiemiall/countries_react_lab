import { useState, useEffect } from 'react';
import './App.css';
import CountryListContainer from './containers/CountryListContainer';


function App() {
  // fetch countries from API and store in State
  const [listOfCountries, setListOfCountries]= useState(null);

  const loadCountryData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json();
    setListOfCountries(data);
  }
  
  useEffect(() => {
    loadCountryData();
  }, []);

// loop through countries and pass each as a prop to country.js
// if listOfCountries !null ?

  return (
    <>
    {listOfCountries ? <CountryListContainer listOfCountries={listOfCountries}/> : <p> Loading countries...</p>}
    {/* <CountryListContainer listOfCountries={listOfCountries}/> */}
    </>
  );
}

export default App;
