import { render, screen } from "@testing-library/react";
import Addition from ".";
describe("Addition", () => {
  beforeEach(() => {
    render(<Addition />);
  });

  test("Test number1 input", () => {
    expect(screen.getByText("Number1")).toBeInTheDocument();
  });

  test("Test number2 input", () => {
    expect(screen.findAllByRole("type")).toReturn;
  });
});
