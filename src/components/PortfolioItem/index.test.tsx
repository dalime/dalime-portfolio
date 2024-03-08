import React from "react";
import { render, screen } from "@testing-library/react";

import PortfolioItem from "./index";

describe("Portfolio item", () => {
  render(
    <PortfolioItem
      title="Text"
      description="lorem ipsum"
      role="Role Name"
      imgSrc=""
    />
  );

  it("Renders", () => {
    const portfolioItem = screen.getByTestId("portfolio-item");
    expect(portfolioItem).toBeInTheDocument();
  });
});
