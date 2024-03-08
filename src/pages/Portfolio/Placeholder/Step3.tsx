import React from "react";
import { Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

// Types
import { StepProps } from "./types";

// Assets
import PhoneTransparent from "../../../assets/images/iphone-frame-transparent.png";
import PlaceholderImage from "../../../assets/images/placeholder-image.jpeg";

// Style
import "./index.css";

function Step3({ phoneDimensions, isMobile, deviceHeight }: StepProps) {
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
          top: isMobile ? "20%" : "50%",
          transform: isMobile ? "translateX(-50%)" : "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: width - (isMobile ? 10 : 30),
            marginLeft: isMobile ? 5 : 15,
            marginRight: isMobile ? 5 : 15,
          }}
          className="fade-in"
        >
          <Typography
            variant="h2"
            style={{
              fontSize: isMobile ? 11 : 30,
              fontWeight: 600,
              color: blue[500],
              textAlign: "center",
            }}
          >
            New App
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: grey[500],
              textAlign: "center",
              fontSize: isMobile ? 9 : "auto",
            }}
          >
            Let's build something cool together!
          </Typography>
          <img
            src={PlaceholderImage}
            alt="Placeholder"
            style={{
              width: isMobile ? 30 : 100,
              height: "auto",
              borderRadius: 8,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Step3;
