import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BackToTopButton from "./BackToTopButton";

test("It should render BackToTopButton", () => {
  render(<BackToTopButton />);
  const button = screen.getByTestId(/backtotopbtn-test/i);
  expect(button).toBeTruthy();
});

test("It should click BackToTopButton", () => {
  const handleClick = jest.fn();
  render(<BackToTopButton onClick={handleClick}>Back to top</BackToTopButton>);
  fireEvent.click(screen.getByTestId(/backtotopbtn-test/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
