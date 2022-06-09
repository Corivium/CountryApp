import CountryCards from '../components/countryCards/countryCards';


const Homepage = ({ countryData }) => {
  return (
    <CountryCards countries={countryData}/>
  )
}


export async function getServerSideProps() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,population,cca2,cioc,currencies");
    const countryData = await res.json();
    return {
      props: {
        countryData
      }
    }
  } catch(err) {
    return err;
  }
}

export default Homepage;