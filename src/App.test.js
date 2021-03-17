/** @format */

import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders title", () => {
    const linkElement = screen.getByText(
      "Example Material-UI/React Application"
    );
    expect(linkElement).toBeInTheDocument();
  });

  test("OK button click", () => {
    // Verify that when clicked, the OK button updates the
    // response text field
    expect(screen.getByText("no response")).toBeInTheDocument();
    const btn = screen.getByRole("button", { name: "ok" });
    fireEvent.click(btn);

    expect(
      screen.getByText("You clicked the button 1 time(s)")
    ).toBeInTheDocument();

    fireEvent.click(btn);

    expect(
      screen.getByText("You clicked the button 2 time(s)")
    ).toBeInTheDocument();
  });
});
