import React from "react";
import { useMediaQuery } from "react-responsive";

// Components
import Service from "./Service";
import { Section, Subheading } from "../../../components";

// Styles
import { Wrapper } from "./index.styles";

function Services() {
  const isSmallScreen = useMediaQuery({ maxWidth: 1100 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const paddingSide = isMobile
    ? { paddingLeft: "10%", paddingRight: "10%" }
    : {};

  return (
    <Section
      style={{
        ...paddingSide,
        paddingTop: "7.5%",
        paddingBottom: "7.5%",
      }}
    >
      <Subheading sx={isMobile ? { fontSize: 30 } : {}}>
        A Comprehensive Development Agency
      </Subheading>
      <Wrapper style={{ flexDirection: isSmallScreen ? "column" : "row" }}>
        <Service
          title="Design"
          animationName="design"
          description="App and website designs that combine creativity and user-centric principles"
        />
        <Service
          title="Development"
          animationName="development"
          description="Customized apps and websites that lead to business growth"
        />
        <Service
          title="Copywriting"
          animationName="copywriting"
          description="Compelling copywriting services that converts visitors to customers"
        />
      </Wrapper>
    </Section>
  );
}

export default Services;
