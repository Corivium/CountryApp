import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BorderingCountry from "./BorderingCountry";
import { borders } from "../../config/testdata";

test("It should render the BorderingCountry Component", () => {

  render(<BorderingCountry border={borders} />);

  const borderCountryCard = screen.getAllByTestId("borderCountry-test");
  expect(borderCountryCard).toBeTruthy();
});
