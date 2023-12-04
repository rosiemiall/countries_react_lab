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

// loop through countries and pass each as a prop to country.js
  // const toVisitList = listOfCountries.map((country) => {
  //   return <li><Country country = {country} /> </li>
  // })
  // const visitedList = [];

  const visitCountry = (country) => {
    setVisitedListOfCountries([...visitedListOfCountries, country])
    // setListOfCountries(listOfCountries.splice[0,1])
  }

  const removeCountry = (country) => {
    return listOfCountries.splice(0,1)
  }

  return(
    <>
    
        {listOfCountries ? <CountryListContainer listOfCountries= {listOfCountries} visitedListOfCountries={visitedListOfCountries} visitCountry={visitCountry}/> : <p> Loading countries...</p>}
        {/* {toVisitList} */}
        {/* <CountryList listOfCountries={listOfCountries}/> */}
    
    </>
  );
}

export default App;
