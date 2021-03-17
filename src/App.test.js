/** @format */

import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("show the dom", () => {
    screen.debug();
  });

  test("renders title", () => {
    const linkElement = screen.getByText(
      "Example Material-UI/React Application"
    );
    expect(linkElement).toBeInTheDocument();
  });

  test("renders the ok button", () => {
    const buttonEl = screen.getByText("ok");
    expect(buttonEl).toBeInTheDocument();
  });
});
