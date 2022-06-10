import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryCards from "./CountryCards";
import { countryData } from "../../config/testdata";

test("It should render the CountryCards Component with each country", () => {

  render(<CountryCards countries={countryData} />);

  const countryCard = screen.getAllByTestId("country-card-test");
  expect(countryCard).toBeTruthy();
});
