import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@mui/material";
import { Email, GitHub, LinkedIn, YouTube } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import { Paragraph } from "../fonts";

// Styles
import { Wrapper, SocialMediaIcons, LogoImg } from "./index.styles";

// Assets
import DannyAvatar from "../../assets/images/team/danny-avatar-bw.png";

interface SocialMediaLink {
  name: string;
  action(): void;
  icon: JSX.Element;
}

function Footer() {
  // Hooks
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // State
  const [hoveringItem, setHoveringItem] = useState<number | null>(null);

  const socialMediaLinks: SocialMediaLink[] = [
    {
      name: "Email",
      action: () =>
        (window.location.href = `mailto:danny.b.lim@gmail.com?subject=${encodeURIComponent(
          "New Inquiry"
        )}`),
      icon: <Email />,
    },
    {
      name: "GitHub",
      action: () => navigateToUrl("https://github.com/dalime"),
      icon: <GitHub />,
    },
    {
      name: "LinkedIn",
      action: () => navigateToUrl("https://linkedin.com/in/dalime"),
      icon: <LinkedIn />,
    },
    {
      name: "YouTube",
      action: () => navigateToUrl("https://www.youtube.com/@sleekapp"),
      icon: <YouTube />,
    },
  ];

  return (
    <Wrapper>
      <SocialMediaIcons>
        {socialMediaLinks.map((link, index) => (
          <Button
            key={`footer-social-media-${index}`}
            variant="text"
            color={hoveringItem === index ? "primary" : "secondary"}
            onClick={() => link.action()}
            onMouseEnter={() => setHoveringItem(index)}
            onMouseLeave={() => setHoveringItem(null)}
          >
            {link.icon}
          </Button>
        ))}
      </SocialMediaIcons>
      <SocialMediaIcons
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <LogoImg src={DannyAvatar} alt="Danny Lim" />
        <Paragraph
          sx={{
            color: grey[600],
            textAlign: "center",
            fontSize: isMobile ? 11 : "1rem",
            marginBottom: 0,
          }}
        >
          {new Date().getFullYear()} &copy; Sleek App LLC. All Rights Reserved.
        </Paragraph>
      </SocialMediaIcons>
    </Wrapper>
  );
}

export default Footer;
