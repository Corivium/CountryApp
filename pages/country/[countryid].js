import PropTypes from "prop-types";
import CountryDetailsPanel from "../../components/countryDetailsPanel/CountryDetailsPanel";
import { endpoint } from "../../config/config";

const CountryDetails = ({ countryDetailsData, borderCountryData }) => {
  return (
    <>
      {countryDetailsData.map((countryDetails) => <CountryDetailsPanel key={countryDetails.cca2} data={countryDetails} borderingCountries={borderCountryData} />)}
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { countryid } = query;
  try {
    const res = await fetch(`${endpoint}alpha/${countryid}`);
    const countryDetailsData = await res.json();

    const borderingCountries = await fetch(`${endpoint}alpha?codes=${countryDetailsData[0].borders}`);
    const borderCountryData = await borderingCountries.json();
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

CountryDetails.propTypes = {
  countryDetailsData: PropTypes.array,
  borderCountryData: PropTypes.array
}