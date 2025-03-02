import React, { CSSProperties, ReactNode, useState } from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
import { Button, SxProps } from "@mui/material";
import { blue } from "@mui/material/colors";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import Process from "./Process";
import {
  Page,
  Section,
  MainHeading,
  Paragraph,
  PersonalLife,
  Subheading,
  ContactForm,
  TechStack,
} from "../../components";

// Styles
import { TeamMemberImg } from "./index.styles";

// Assets
import aboutPageImg from "../../assets/images/pages/dannylim-about-page.png";
import dannyAvatarImg from "../../assets/images/team/danny-avatar.png";
import dannyAvatarBwImg from "../../assets/images/team/danny-avatar-bw.png";
import Resume from "./Resume";

interface SubHeadProps {
  isMobile: boolean;
  children?: ReactNode | ReactNode[];
}

/**
 * Subheading with mobile style
 * @param isMobile boolean
 * @param children ReactNode | ReactNode[] | undefined
 * @returns
 */
function SubHead({ isMobile, children }: SubHeadProps): JSX.Element {
  return (
    <Subheading sx={isMobile ? { fontSize: 30 } : {}}>{children}</Subheading>
  );
}

interface SectionCutProps {
  children?: ReactNode | ReactNode[];
  style?: CSSProperties;
}

/**
 * Subheading with mobile style
 * @param children ReactNode | ReactNode[] | undefined
 * @param style CSSProperties | undefined
 * @returns
 */
function SectionCut({ children, style }: SectionCutProps): JSX.Element {
  const baseStyle = { paddingTop: "7.5%", paddingBottom: "7.5%" };

  return (
    <Section style={style ? { ...baseStyle, ...style } : baseStyle}>
      {children}
    </Section>
  );
}

function About() {
  // Hooks
  const isMedScreen = useMediaQuery({ maxWidth: 1100 });
  const isSmallScreen = useMediaQuery({ maxWidth: 900 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // State
  const [imgHovering, setImgHovering] = useState<boolean>(false);

  // Style
  const mainStyle: CSSProperties = { color: blue[300], textAlign: "center" };
  const paddingSide = {
    paddingLeft: "10%",
    paddingRight: "10%",
  };
  const paragraphSx: SxProps = {
    textAlign: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: 2,
  };
  const columnCenter: CSSProperties = {
    display: "fex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Danny Lim - Technical Product Manager & Senior Developer</title>
        <meta
          name="description"
          content="Danny Lim delivers high quality web and mobile apps for clients who want to provide real value to customers."
        />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://dannylim.io/about/" />
        <meta name="generator" content="All in One SEO (AIOSEO) 4.3.6.1 " />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content="Danny Lim - Technical Product Manager & Senior Developer"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="About Danny Lim"
        />
        <meta
          property="og:description"
          content="Danny Lim delivers high quality web and mobile apps for clients who want to provide real value to customers."
        />
        <meta property="og:url" content="https://dannylim.io/about/" />
        <meta property="og:image" content={aboutPageImg} />
        <meta property="og:image:secure_url" content={aboutPageImg} />
        <meta
          property="article:published_time"
          content="2023-09-09T10:12:21+00:00"
        />
        <meta
          property="article:modified_time"
          content="2023-09-09T10:26:59+00:00"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Danny Lim"
        />
        <meta
          name="twitter:description"
          content="Danny Lim delivers high quality web and mobile apps for clients who want to provide real value to customers."
        />
        <meta name="twitter:image" content={aboutPageImg} />
      </Helmet>

      <MainHeading sx={isMobile ? { ...mainStyle, fontSize: 30 } : mainStyle}>
        About
      </MainHeading>
      <SectionCut
        style={{
          ...paddingSide,
          ...columnCenter,
        }}
      >
        <Button
          onClick={() =>
            process.env.REACT_APP_CALL_LINK
              ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
              : {}
          }
          style={{ cursor: 'pointer' }}
        >
          <TeamMemberImg
            src={imgHovering ? dannyAvatarImg : dannyAvatarBwImg}
            alt="Danny Lim"
            onMouseEnter={() => setImgHovering(true)}
            onMouseLeave={() => setImgHovering(false)}
          />
        </Button>
        <Paragraph sx={{
          ...paragraphSx,
          ...paddingSide,
          width: isMobile
            ? "100%"
            : isSmallScreen
            ? "75%"
            : isMedScreen
            ? "60%"
            : "50%",
          marginLeft: isMobile
            ? 0
            : isSmallScreen
            ? "12.5%"
            : isMedScreen
            ? "20%"
            : "25%",
        }}>
          Danny Lim delivers high quality web and
          mobile apps for clients who want to create real value-providing products
          for customers.
        </Paragraph>
        <Button
          className="pulse"
          variant="contained"
          color="primary"
          sx={{ marginTop: 5, padding: 2 }}
          onClick={() =>
            process.env.REACT_APP_CALL_LINK
              ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
              : {}
          }
        >
          Book 1:1 Strategy Call
        </Button>
      </SectionCut>
      <SectionCut style={paddingSide}>
        <SubHead isMobile={isMobile}>How Your Delivery Will Look</SubHead>
        <Process />
      </SectionCut>
      <SectionCut>
        <Resume />
      </SectionCut>
      <SectionCut>
        <PersonalLife />
      </SectionCut>
      <TechStack />
      <SectionCut>
        <ContactForm />
      </SectionCut>
    </Page>
  );
}

export default About;
