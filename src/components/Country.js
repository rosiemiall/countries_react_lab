const Country = ({ country, visitCountry }) => {
  const handleCheckbox = (e) => {
    visitCountry(country)
  };

  
  return (
    <>
      <li> {country.name.common}</li>
      <input type="checkbox" onInput={(e) => handleCheckbox(e)}></input>
    </>
  );
};

export default Country;
