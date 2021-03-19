/** @format */

import { render, screen } from "@testing-library/react";
import TextFieldSelect from "./TextFieldSelect";

describe("TextFieldSelect", () => {
  beforeEach(() => {
    render(<TextFieldSelect />);
  });

  test("it has the proper label", () => {
    expect(
      screen.getByText("Oh, Canada", { selector: "label" })
    ).toBeInTheDocument();
  });

  test("it has the proper number of entries", () => {
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(7);
  });

  test("it has the proper default value", () => {
    expect(screen.getByLabelText("Oh, Canada").value).toBe("NONE");
  });

  test("it responds to clicks appropriately", () => {
    // https://stackoverflow.com/questions/55575843/how-to-test-react-select-with-react-testing-library
    // TODO: since this select is native, does it need React Native Testing Library?
  });

  // test("show the dom", () => {
  //   screen.debug();
  // });
});
