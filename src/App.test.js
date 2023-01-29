import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";

describe.only("App", () => {
  test("should watch input correctly", () => {
    const { getByTestId } = render(<App />);

    fireEvent.input(getByTestId("example"), {
      target: {
        value: "test"
      }
    });

    expect(getByTestId("message").innerHTML).toEqual("Hidden message");
  });

  test("should display correct error message", () => {
    const { getByTestId, findByText } = render(<App />);

    getByTestId("submit");

    fireEvent.click(getByTestId("submit"));

    findByText("This field is required");
  });
});
