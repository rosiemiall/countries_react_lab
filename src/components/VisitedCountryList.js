import Country from "./Country";

const VisitedCountryList = ({visitedListOfCountries}) => {
    const visitedList = visitedListOfCountries.map((country) => {
        return <li><Country country = {country}/> </li>
    })

    // handle check


    return ( 
        <>
            <ul> {visitedList} </ul>
        </>
     );
}
 
export default VisitedCountryList;