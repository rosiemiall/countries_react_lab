import Country from "./Country";

const CountryList = ({listOfCountries, visitCountry}) => {

    const toVisitList = listOfCountries.map((country) => {
        return <li><Country country = {country} visitCountry={visitCountry}/> </li>
    })

    // handle check


    return ( 
        <>
            <ul> {toVisitList} </ul>
        </>
     );
}
 
export default CountryList;