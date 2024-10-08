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
        Senior Developer & Technical Product Manager
      </Subheading>
      <Wrapper style={{ flexDirection: isSmallScreen ? "column" : "row" }}>
        <Service
          title="Development"
          animationName="development"
          description="Customized apps and websites that lead to business growth"
        />
        <Service
          title="Product Management"
          animationName="product management"
          description="Technical product management to bring your project forward"
        />
      </Wrapper>
    </Section>
  );
}

export default Services;
