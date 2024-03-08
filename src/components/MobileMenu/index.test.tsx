import React from "react";
import { render, screen } from "@testing-library/react";

import MobileMenu from "./index";

describe("Mobile Menu", () => {
  render(<MobileMenu />);

  it("Renders", () => {
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toBeInTheDocument();
  });
});
