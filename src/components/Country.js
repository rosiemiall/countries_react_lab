const Country = ({ country, visitCountry }) => {
  const handleCheckbox = (e) => {
    visitCountry(country);
  };

  return (
    <>
      {country.flag}
      {country.name.common}
      <input type="checkbox" onInput={(e) => handleCheckbox(e)}></input>
    </>
  );
};

export default Country;
