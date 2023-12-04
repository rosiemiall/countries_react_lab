import Country from "./Country";

const CountryList = ({listOfCountries}) => {

    const toVisitList = listOfCountries.map((country) => {
        return <div><Country country = {country} /> </div>
    })


    return ( 
        <>
            <section> {toVisitList} </section>
        </>
     );
}
 
export default CountryList;