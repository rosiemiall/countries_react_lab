import Country from "./Country";

const CountryList = ({listOfCountries, visitCountry}) => {

    const toVisitList = listOfCountries.map((country) => {
        return <p className="country"><Country country = {country} visitCountry={visitCountry}/> </p>
    })

    // handle check


    return ( 
        <>
            <ul> {toVisitList} </ul>
        </>
     );
}
 
export default CountryList;