import React, { useState, useEffect, ReactNode } from "react";
import { Helmet } from "react-helmet";
import { yellow } from "@mui/material/colors";

// Components
import Hero from "./Hero";
import Services from "./Services";
import Reviews from "./Reviews";
import CTASection from "./CTASection";
import {
  H3,
  Page,
  Paragraph,
  Section,
  Subheading,
  TechStack,
  ContactForm,
} from "../../components";

// Assets
import sleekAppLogo from "../../assets/images/sleekapp-logo.png";

interface GoldHighlightProps {
  children?: ReactNode | ReactNode[];
}

function GoldHighlight({ children }: GoldHighlightProps): JSX.Element {
  return <span style={{ color: yellow[500] }}>{children}</span>;
}

function Home() {
  // State
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // Effects
  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set paragraph width based on mobile or not
  const paragraphWidth = windowWidth <= 500 ? windowWidth * 0.8 : 500;

  const videoWidth =
    windowWidth < 768 ? windowWidth * 0.8 : Math.min(560, windowWidth);
  const videoHeight =
    windowWidth < 768 ? windowWidth : (videoWidth * 315) / 560;

  return (
    <Page testId="home-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sleek App - App Development Agency</title>
        <meta
          name="description"
          content="Turn your digital ideas into reality. An app development agency that offers app and website design, development, and copywriting services. Contact us today!"
        />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://sleekapp.io/" />
        <meta name="generator" content="All in One SEO (AIOSEO) 4.3.6.1 " />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content="Sleek App - Turning visions into reality"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sleek App - App Development Agency"
        />
        <meta
          property="og:description"
          content="Turn your digital ideas into reality. An app development agency that offers app and website design, development, and copywriting services. Contact us today!"
        />
        <meta property="og:url" content="https://sleekapp.io/" />
        <meta property="og:image" content={sleekAppLogo} />
        <meta property="og:image:secure_url" content={sleekAppLogo} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Sleek App - App Development Agency"
        />
        <meta
          name="twitter:description"
          content="Turn your digital ideas into reality. An app development agency that offers app and website design, development, and copywriting services. Contact us today!"
        />
        <meta name="twitter:image" content={sleekAppLogo} />
      </Helmet>

      <Hero />
      <Services />
      <TechStack noAction />
      <CTASection />
      <Reviews />
      <CTASection />
      <Section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: "7.5%",
          paddingBottom: "7.5%",
        }}
      >
        <Subheading>A Detailed Case Study</Subheading>
        <H3 style={windowWidth < 768 ? { textAlign: "center" } : {}}>
          Building a 2D Game Board with React
        </H3>
        <Paragraph
          sx={{ width: paragraphWidth, marginBottom: 2, marginTop: 3 }}
        >
          <GoldHighlight>The Ask: </GoldHighlight>We were tasked with creating a
          2D lofi game with React. The game is meant to be played like a board
          game with selectable board zones and the board is meant to be zoomable
          / pinch and zoom.
        </Paragraph>
        <Paragraph sx={{ width: paragraphWidth, marginBottom: 3 }}>
          <GoldHighlight>Our Approach: </GoldHighlight>Here is a detailed
          explanation of how we approached the problem, step by step in a video.
        </Paragraph>
        <iframe
          width={videoWidth}
          height={videoHeight}
          src="https://www.youtube.com/embed/PjLBs2vAgl8?si=h-MtlY631oOtKxIj"
          title="A Detailed YouTube Case Study"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Section>
      <CTASection />
      <ContactForm />
    </Page>
  );
}

export default Home;
