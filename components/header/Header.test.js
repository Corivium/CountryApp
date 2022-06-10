import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("It should render the header component", () => {
  const component = render(<Header />);
  expect(component).toBeTruthy();
});