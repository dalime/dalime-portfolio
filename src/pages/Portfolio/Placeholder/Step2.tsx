import React from "react";

// Types
import { StepProps } from "./types";

// Assets
import PhoneTransparent from "../../../assets/images/iphone-frame-transparent.png";

// Style
import "./index.css";

function Step2({ phoneDimensions, isMobile, deviceHeight }: StepProps) {
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
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 50,
          transform: "translateX(-50%)",
          width: width - (isMobile ? 10 : 30),
          marginLeft: isMobile ? 5 : 15,
        }}
        className="fade-in"
      >
        <h2
          style={{
            color: "#FFFFFF",
            fontSize: isMobile ? 11 : "auto",
          }}
        >
          New App
        </h2>
        <p
          style={{
            color: "#FFFFFF",
            fontSize: isMobile ? 9 : "auto",
          }}
        >
          Let's build something cool together!
        </p>
      </div>
    </div>
  );
}

export default Step2;
