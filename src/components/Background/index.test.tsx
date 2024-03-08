import React from "react";
import { render } from "@testing-library/react";

import Background from "./index";

describe("Background particles", () => {
  const { container } = render(<Background />);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const background = container.querySelector("#tsparticles");

  it("Renders", () => {
    expect(background).toBeInTheDocument();
  });
});
