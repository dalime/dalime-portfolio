import React from "react";
import { screen, render } from "@testing-library/react";

// Components
import Home from "./index";

describe("Home Page", () => {
  render(<Home />);

  it("Renders", () => {
    const homePage = screen.getByTestId("home-page");
    expect(homePage).toBeInTheDocument();
  });
});
