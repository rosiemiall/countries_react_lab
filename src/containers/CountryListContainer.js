import CountryList from "../components/CountryList";
import VisitedCountryList from "../components/VisitedCountryList";
const CountryListContainer = ({listOfCountries, visitedListOfCountries, visitCountry} ) => {
    

    // const toVisitList = listOfCountries.map((country) => {
    //     return <li><Country country = {country}/> </li>
    // })
    return ( 
        <>
            <section className="section">
                <h1 className="title">Countries To Visit 📌</h1>
                <CountryList listOfCountries={listOfCountries} visitCountry={visitCountry}/>

                {/* {toVisitList} */}
            </section>
            <section className="section">
                <h1 className="title">Countries Visited 🗺️</h1>
                <VisitedCountryList visitedListOfCountries={visitedListOfCountries}/>
            </section>
        </>
     );
}
 
export default CountryListContainer;