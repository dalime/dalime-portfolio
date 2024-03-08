import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@mui/material";
import { Paid } from "@mui/icons-material";

// Helpers
import { navigateToUrl } from "../../../helpers";

// Components
import { Section } from "../../../components";

function CTASection() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const paddingSide = isMobile
    ? { paddingLeft: "10%", paddingRight: "10%" }
    : {};

  return (
    <Section
      style={{
        ...paddingSide,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <Button
        variant="contained"
        onClick={() =>
          process.env.REACT_APP_CALL_LINK
            ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
            : {}
        }
        sx={{
          padding: 3,
        }}
        className="pulse"
        startIcon={<Paid fontSize="large" />}
      >
        Turn Money Printer On
      </Button>
    </Section>
  );
}

export default CTASection;
