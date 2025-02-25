import React from "react";
import Typed from "react-typed";
import { Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Code } from "@mui/icons-material";

// Helpers
import { navigateToUrl } from "../../../helpers";

interface Props {
  mobile?: boolean;
}

function HeroText({ mobile }: Props) {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: mobile ? 26 : 30,
          textTransform: "uppercase",
          fontWeight: 600,
          textAlign: mobile ? "center" : "left",
        }}
      >
        <span style={{ color: blue[200] }}>Danny Lim</span>
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 500,
          marginTop: 2,
          fontSize: mobile ? 32 : "auto",
          textAlign: mobile ? "center" : "left",
        }}
      >
        <Typed
          strings={["Technical Product Manager + Senior Developer"]}
          typeSpeed={40}
          style={{ textAlign: mobile ? "center" : "left" }}
        />
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: 2,
          fontSize: 20,
          textAlign: mobile ? "center" : "left",
        }}
      >
        I turn ideas into tangible products
      </Typography>
      <Button
        variant="contained"
        sx={{ marginTop: 4, padding: 2 }}
        onClick={() =>
          process.env.REACT_APP_CALL_LINK
            ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
            : {}
        }
        startIcon={<Code fontSize="large" />}
      >
        Develop Your App
      </Button>
    </>
  );
}

export default HeroText;
