import PropTypes from "prop-types";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Container = ({ children }) => {

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Container;

Container.propTypes = {
  childre: PropTypes.node
}