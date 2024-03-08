import React from "react";
import { CircularProgress } from "@mui/material";
import { grey } from "@mui/material/colors";

// Types
import { LastStepProps } from "./types";

// Style
import "./index.css";

function Step5({ isMobile }: LastStepProps) {
  return (
    <div
      style={{
        height: "100%",
        background: "transparent",
        backgroundSize: "auto 100%",
      }}
      className="fade-in-fast"
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <CircularProgress
          size={isMobile ? 50 : 200}
          style={{ color: grey[200] }}
        />
      </div>
    </div>
  );
}

export default Step5;
