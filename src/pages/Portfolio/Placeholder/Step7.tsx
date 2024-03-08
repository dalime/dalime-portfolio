import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { animated, useSpring } from "@react-spring/web";
import { Button } from "@mui/material";
import { AppShortcut, Paid } from "@mui/icons-material";
import { green, grey } from "@mui/material/colors";

// Types
import { BaseProps } from "./types";

// Helpers
import { navigateToUrl } from "../../../helpers";

// Style
import "./index.css";

function Step7({ deviceHeight }: BaseProps) {
  // Hooks
  const mobile = useMediaQuery({ maxWidth: 768 });

  // State
  const [pulse, setPulse] = useState<boolean>(false);
  const [showCTA, setShowCTA] = useState<boolean>(false);

  const tensionAndSpring = mobile
    ? deviceHeight > 600
      ? 15
      : deviceHeight > 700
      ? 20
      : deviceHeight > 800
      ? 30
      : 10
    : 15;

  // React Spring
  const { y } = useSpring({
    from: { y: 0 },
    to: { y: pulse ? 0 : tensionAndSpring },
    onRest: () => setPulse(!pulse),
    config: {
      tension: tensionAndSpring,
      friction: 0,
    },
  });

  // Effects
  useEffect(() => {
    setTimeout(() => {
      setShowCTA(true);
    }, 1500);
  }, []);

  const animatedIconSize = mobile
    ? deviceHeight > 650
      ? 100
      : deviceHeight < 560
      ? 30
      : 50
    : 150;

  return (
    <div
      style={{
        height: "100%",
        background: "transparent",
        backgroundSize: "auto 100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "10%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
        className="fade-in"
      >
        <AppShortcut
          fontSize="large"
          style={{
            width: mobile ? (deviceHeight > 700 ? 100 : 50) : 150,
            height: "auto",
            color: grey[200],
            marginBottom: 30,
          }}
        />
      </div>
      {showCTA && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "70%",
            transform: "translate(-50%, -70%)",
            textAlign: "center",
          }}
        >
          <animated.div
            children={
              <Paid
                fontSize="large"
                style={{
                  width: animatedIconSize,
                  height: "auto",
                  color: green[500],
                }}
              />
            }
            style={{
              width: animatedIconSize,
              height: "auto",
              transform: y.to((value) => `translate3d(0,${value}px,0)`),
              margin: "auto",
            }}
          />
          <Button
            color="primary"
            variant="contained"
            className="pulse"
            sx={{
              marginTop: deviceHeight < 515 ? 3 : deviceHeight < 560 ? 5 : 7,
              fontSize: mobile ? (deviceHeight < 560 ? 9 : 11) : "auto",
            }}
            onClick={() =>
              process.env.REACT_APP_CALL_LINK
                ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
                : {}
            }
          >
            Turn Money Printer On
          </Button>
        </div>
      )}
    </div>
  );
}

export default Step7;
