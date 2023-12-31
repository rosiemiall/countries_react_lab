import { useState, useEffect } from 'react';
import './App.css';
import CountryListContainer from './containers/CountryListContainer';
import CountryList from './components/CountryList';
import Country from './components/Country';


function App() {
  // fetch countries from API and store in State
  const [listOfCountries, setListOfCountries]= useState(null);
  const [visitedListOfCountries, setVisitedListOfCountries] = useState([]);

  const loadCountryData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json();
    setListOfCountries(data);
  }
  
  useEffect(() => {
    loadCountryData();
  }, []);



  const visitCountry = (countryToDelete) => {
    removeCountry(countryToDelete)
    
    setVisitedListOfCountries([...visitedListOfCountries, countryToDelete])
  }

  const removeCountry = (countryToDelete) => {
    const updatedCountries = listOfCountries.filter(country => country !== countryToDelete)
    setListOfCountries(updatedCountries)
  }

  return(
    <>
    
        {listOfCountries ? <CountryListContainer listOfCountries= {listOfCountries} visitedListOfCountries={visitedListOfCountries} visitCountry={visitCountry}/> : <p> Loading countries...</p>}
    
    </>
  );
}

export default App;
