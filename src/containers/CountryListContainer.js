import CountryList from "../components/CountryList";
const CountryListContainer = ({listOfCountries}) => {

    return ( 
        <>
            <section>
                <h1>Countries To Visit</h1>
                <CountryList listOfCountries={listOfCountries}/> 
            </section>
            <section>
                <h1>Countries Visited</h1>
                {/* <CountryList listOfCountries={listOfCountries}/>  */}
            </section>
        </>
     );
}
 
export default CountryListContainer;