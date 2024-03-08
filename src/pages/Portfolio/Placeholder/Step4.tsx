import React from "react";
import { Typography, Button } from "@mui/material";
import { Google, Facebook, Email } from "@mui/icons-material";
import { blue, grey } from "@mui/material/colors";

// Types
import { StepProps } from "./types";

// Assets
import PhoneTransparent from "../../../assets/images/iphone-frame-transparent.png";
import PlaceholderImage from "../../../assets/images/placeholder-image.jpeg";

// Style
import "./index.css";

function Step4({ phoneDimensions, isMobile, deviceHeight }: StepProps) {
  const { width, height } = phoneDimensions;

  /**
   * Renders a social media button
   * @param Icon JSX.Element
   * @returns JSX.Element
   */
  const renderButton = (Icon: JSX.Element): JSX.Element => (
    <Button
      variant={isMobile ? "text" : "contained"}
      color="info"
      style={isMobile ? { width: 30, marginBottom: 5 } : {}}
    >
      {Icon}
    </Button>
  );

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
          <div
            style={
              isMobile
                ? {
                    marginTop: 5,
                    maxWidth: width - 10,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }
                : {
                    marginTop: 20,
                  }
            }
          >
            {renderButton(<Google fontSize={isMobile ? "small" : "medium"} />)}
            {height > 535 &&
              renderButton(
                <Facebook fontSize={isMobile ? "small" : "medium"} />
              )}
            {height > 592 &&
              renderButton(<Email fontSize={isMobile ? "small" : "medium"} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4;
