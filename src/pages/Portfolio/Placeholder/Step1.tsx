import React from "react";

// Types
import { StepProps } from "./types";

// Assets
import PhoneTransparent from "../../../assets/images/iphone-frame-transparent.png";

// Style
import "./index.css";

function Step1({ phoneDimensions }: StepProps) {
  const { width, height } = phoneDimensions;

  return (
    <div
      style={{
        width: "100%",
        height,
        background: "transparent",
        backgroundImage: `url(${PhoneTransparent}`,
        backgroundSize: `${width}px ${height}px`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0",
      }}
      className="fade-in"
    ></div>
  );
}

export default Step1;
