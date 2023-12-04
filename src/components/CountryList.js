import Country from "./Country";

const CountryList = ({listOfCountries}) => {

    const toVisitList = listOfCountries.map((country) => {
        return <li><Country country = {country}/> </li>
    })


    return ( 
        <>
            <ul> {toVisitList} </ul>
        </>
     );
}
 
export default CountryList;