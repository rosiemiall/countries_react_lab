import CountryList from "../components/CountryList";
const CountryListContainer = ({listOfCountries}) => {

    return ( 
        <>
            <h1>Countries To Visit</h1>
            <CountryList listOfCountries={listOfCountries}/> 
    
        </>
     );
}
 
export default CountryListContainer;