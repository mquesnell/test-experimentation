/** @format */

import { fireEvent, render, screen, within } from "@testing-library/react";
import DropDown from "./DropDown";

describe("Dropdown", () => {
  beforeEach(() => {
    render(<DropDown />);
  });

  test("it has the proper label", () => {
    // find the label of the drop-down, not the drop-down itself
    const s = screen.getByText("Country", { selector: "label" });
    expect(s).toBeInTheDocument();
  });

  test("it has the proper default value", () => {
    // find the drop-down and verify that it has the correct value
    // note: this tests the text of the select rather than the
    // value property (this seems to agree with the "don't test
    // implementation details" mantra)
    expect(screen.getByTestId("drop-down-select")).toHaveTextContent(/none/i);
  });

  test("clicking on the contents of the drop down works", () => {
    // click on each of the available choices in the drop down
    // and verify that each yields the correct content in the box
    const btn = screen.getByRole("button");
    const dds = screen.getByTestId("drop-down-select");
    let listbox;

    fireEvent.mouseDown(btn);
    listbox = within(screen.getByRole("listbox"));
    fireEvent.click(listbox.getByText("Canada"));
    expect(dds).toHaveTextContent("Canada");

    fireEvent.mouseDown(btn);
    listbox = within(screen.getByRole("listbox"));
    fireEvent.click(listbox.getByText("Mexico"));
    expect(dds).toHaveTextContent("Mexico");

    fireEvent.mouseDown(btn);
    listbox = within(screen.getByRole("listbox"));
    fireEvent.click(listbox.getByText("United States of America"));
    expect(dds).toHaveTextContent("United States of America");

    fireEvent.mouseDown(btn);
    listbox = within(screen.getByRole("listbox"));
    fireEvent.click(listbox.getByText("None"));
    expect(dds).toHaveTextContent("None");
  });

  // test("show the dom", () => {
  //   screen.debug();
  // });
});
