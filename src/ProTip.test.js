/** @format */

import { render, screen } from "@testing-library/react";
import ProTip from "./ProTip";

describe("ProTip", () => {
  beforeEach(() => {
    render(<ProTip />);
  });

  test("renders Pro Tip:", () => {
    const proTip = screen.getByText(/Pro tip:/);
    expect(proTip).toBeInTheDocument();
  });

  test("renders a link to templates", () => {
    const link = screen.getByRole("link", { name: /react testing library/i });
    expect(link).toBeInTheDocument();
  });

  test("renders the light bulb icon", () => {
    // only tests for the existence of the test ID which is probably the best
    // we can do. More info:
    // https://stackoverflow.com/questions/58082655/jest-react-testing-library-whats-the-best-way-to-test-the-child-of-a-child
    expect(screen.getByTestId("light-bulb-icon")).toBeTruthy();
  });

  // test("show the dom", () => {
  //   screen.debug();
  // });
});
