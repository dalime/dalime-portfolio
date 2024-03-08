import React from "react";
import { render, screen } from "@testing-library/react";

import Page from "./index";

describe("Page", () => {
  render(<Page testId="testing" />);

  it("Renders", () => {
    const page = screen.getByTestId("testing");
    expect(page).toBeInTheDocument();
  });
});
