import CountryDetailsPanel from "../../components/countryDetailsPanel/CountryDetailsPanel";

const CountryDetails = ({ countryDetailsData, borderCountryData }) => {
  return (
    <>
      {countryDetailsData.map((countryDetails) => <CountryDetailsPanel key={countryDetails.cca2} data={countryDetails} borders={borderCountryData} />)}
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { countryid } = query;
  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryid}`);
    const countryDetailsData = await res.json();

    const borders = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryDetailsData[0].borders}`);
    const borderCountryData = await borders.json();
    return {
      props: {
        countryDetailsData,
        borderCountryData
      },
    };
  } catch (err) {
    return err;
  }
}

export default CountryDetails;
