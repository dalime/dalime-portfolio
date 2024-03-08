import React from "react";
import { render, screen } from "@testing-library/react";

import Section from "./index";

describe("Section component", () => {
  render(<Section />);

  it("Renders", () => {
    const sectionComponent = screen.getByTestId("section-component");
    expect(sectionComponent).toBeInTheDocument();
  });
});
