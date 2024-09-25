import React from "react";
import Typed from "react-typed";
import { Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

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
          fontSize: 30,
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
          fontSize: mobile ? 40 : "auto",
          textAlign: mobile ? "center" : "left",
        }}
      >
        <Typed
          strings={["Senior Developer + Product Manager"]}
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
        I turn visions into reality
      </Typography>
      <Button
        variant="contained"
        sx={{ marginTop: 4, padding: 2 }}
        onClick={() =>
          process.env.REACT_APP_CALL_LINK
            ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
            : {}
        }
      >
        Develop Your App
      </Button>
    </>
  );
}

export default HeroText;
