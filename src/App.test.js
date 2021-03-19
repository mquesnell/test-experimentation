/** @format */

import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

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
    expect(screen.getByTestId("check-icon-on-ok-btn")).toBeInTheDocument();

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

  test("the required text fields are on the page", () => {
    expect(screen.getByLabelText("City")).toBeInTheDocument();
    expect(screen.getByLabelText("County")).toBeInTheDocument();
  });

  test("the text fields accept input", () => {
    const city = screen.getByRole("textbox", { name: "City" });
    userEvent.type(city, "Rivendelle");
    expect(screen.getByLabelText("City").value).toBe("Rivendelle");

    const county = screen.getByRole("textbox", { name: "County" });
    userEvent.type(county, "Calaveras");
    expect(screen.getByLabelText("County").value).toBe("Calaveras");
  });

  test("the radio group and buttons are present", () => {
    expect(screen.getByText("Like Tomatoes?")).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: /no/i })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: /yes/i })).toBeInTheDocument();
  });

  test("the radio group has the proper default value", () => {
    expect(screen.getByRole("radio", { name: /no/i }).checked).toBe(true);
    expect(screen.getByRole("radio", { name: /yes/i }).checked).toBe(false);
  });

  test("the radio buttons can be clicked", () => {
    fireEvent.click(screen.getByTestId("radio-yes"), {
      target: { checked: true },
    });

    expect(screen.getByRole("radio", { name: /no/i }).checked).toBe(false);
    expect(screen.getByRole("radio", { name: /yes/i }).checked).toBe(true);

    fireEvent.click(screen.getByTestId("radio-no"), {
      target: { checked: true },
    });

    expect(screen.getByRole("radio", { name: /no/i }).checked).toBe(true);
    expect(screen.getByRole("radio", { name: /yes/i }).checked).toBe(false);
  });

  // test("show the dom", () => {
  //   screen.debug();
  // });
});
