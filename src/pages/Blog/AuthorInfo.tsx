import React from "react";
import { Button } from "@mui/material";
import { yellow } from "@mui/material/colors";

// Types
import { AuthorInformation } from "./types";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import { Section, Subheading } from "../../components";

// Styles
import { AuthorImg } from "./index.styles";

interface Props {
  info: AuthorInformation;
  isMobile: boolean;
  isTablet: boolean;
}

function AuthorInfo({ info, isMobile, isTablet }: Props) {
  return (
    <Section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Subheading
        style={
          isMobile
            ? { fontSize: 16 }
            : isTablet
            ? { fontSize: 20 }
            : { fontSize: 24 }
        }
      >
        By <span style={{ color: yellow[500] }}>{info.name}</span>
      </Subheading>
      <Button
        variant="text"
        color="primary"
        onClick={() => navigateToUrl(info.linkedIn)}
      >
        <AuthorImg src={info.profileImg} alt={info.name} />
      </Button>
    </Section>
  );
}

export default AuthorInfo;
