const Country = ({ country }) => {
  const handleCheckbox = (e) => {
    console.log("check");
  };
  return (
    <>
      <li> {country.name.common}</li>
      <input type="checkbox" onInput={(e) => handleCheckbox(e)}></input>
    </>
  );
};

export default Country;
