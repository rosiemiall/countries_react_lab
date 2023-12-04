import Country from "./Country";

const VisitedCountryList = ({visitedListOfCountries}) => {
    const visitedList = visitedListOfCountries.map((country) => {
        return <p className="country"><Country country = {country}/> </p>
    })

    // handle check


    return ( 
        <>
            <ul> {visitedList} </ul>
        </>
     );
}
 
export default VisitedCountryList;