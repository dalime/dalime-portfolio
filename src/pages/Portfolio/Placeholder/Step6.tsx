import React from "react";
import { useMediaQuery } from "react-responsive";
import { Upload } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

// Types
import { BaseProps } from "./types";

// Style
import "./index.css";

function Step6({ deviceHeight }: BaseProps) {
  const mobile = useMediaQuery({ maxWidth: 768 });

  const iconSize = mobile ? (deviceHeight > 600 ? 100 : 50) : 200;

  return (
    <div
      style={{
        height: "100%",
        background: "transparent",
        backgroundSize: "auto 100%",
      }}
      className="fade-in"
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
        className="move-up"
      >
        <Upload
          fontSize="large"
          style={{
            width: iconSize,
            height: "auto",
            color: grey[200],
          }}
        />
      </div>
    </div>
  );
}

export default Step6;
