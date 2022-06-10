import { useEffect, useState } from 'react';
import CountryCards from '../components/countryCards/countryCards';
import BackToTopButton from '../components/common/button/BackToTopButton';
import { endpoint } from '../config/config';

//Hooks
import Apphook from "../hooks/Apphook";

const Homepage = ({ countryData }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { backToTopScroll } = Apphook();


  // handle click event for smooth scroll
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  useEffect(() => {
    backToTopScroll(setIsScrolled);
  }, []);

  return (
    <>
      {countryData && <CountryCards countries={countryData}/>}
      {isScrolled && 
        <BackToTopButton 
          label="Back to top"
          ariaLabel="Back to top button"
          onClick={(e) => handleClick(e)}
        />
      }
    </>
  )
}

// call api at build time on server side
// if this api data was changing, then getServerSideProps would be used
export async function getStaticProps() {
  const customFilters = "fields=name,capital,flags,population,cca2,cioc,currencies";
  try {
    // calling api with custom filters to only return data required
    const res = await fetch(`${endpoint}all?${customFilters}`);
    const countryData = await res.json();

    // return the data in props so the Homepage component will receive the data
    return {
      props: {
        countryData
      }
    }
  } catch(err) {
    // if there's an error with the api request, show the error
    return err;
  }
}

export default Homepage;

