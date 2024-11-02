import { render, screen } from "@testing-library/react";
import Parent from ".";

// Mock the child components
jest.mock("../Addition", () => () => (
  <div data-testid="addition-component">Addition Component</div>
));
jest.mock("../Subtraction", () => () => (
  <div data-testid="subtraction-component">Subtraction Component</div>
));
jest.mock("../Multiplication", () => () => (
  <div data-testid="multiplication-component">Multiplication Component</div>
));
jest.mock("../Division", () => () => (
  <div data-testid="division-component">Division Component</div>
));

describe("Parent Component", () => {
  beforeEach(() => {
    render(<Parent />);
  });

  it("should render the parent container", () => {
    const container = screen.getByTestId("parent-container");
    expect(container).toBeInTheDocument();
  });

  it("should render all arithmetic operation components", () => {
    expect(screen.getByTestId("addition-component")).toBeInTheDocument();
    expect(screen.getByTestId("subtraction-component")).toBeInTheDocument();
    expect(screen.getByTestId("multiplication-component")).toBeInTheDocument();
    expect(screen.getByTestId("division-component")).toBeInTheDocument();
  });

  it("should render all dividers with correct text", () => {
    expect(screen.getByText("Addition of two number")).toBeInTheDocument();
    expect(
      screen.getByText("Subtraction between two number")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Multiplication of two number")
    ).toBeInTheDocument();
    expect(screen.getByText("Division of two number")).toBeInTheDocument();
  });

  it("should render a Box component with correct styling", () => {
    const section = screen.getByTestId("parent-box");
    expect(section).toHaveStyle({
      padding: "16px", // p: 2 translates to 16px
      border: "1px dashed grey",
    });
  });
});
