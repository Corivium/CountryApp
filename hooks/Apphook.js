
const Apphook = () => {

  // set scroll state
  const backToTopScroll = (setIsScrolled) => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  // format population number with commas
  function formatPopulation(population) {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return {
    backToTopScroll,
    formatPopulation,
  }
}

export default Apphook;