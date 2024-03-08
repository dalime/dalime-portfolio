import React from "react";
import { useMediaQuery } from "react-responsive";

// Components
import MobileHero from "./MobileHero";
import HeroText from "./HeroText";
import HeroLogo from "./HeroLogo";

// Styles
import { HeroWrapper, HeroLeft } from "./index.styles";

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  if (isMobile) return <MobileHero />;

  return (
    <HeroWrapper>
      <HeroLeft>
        <HeroText />
      </HeroLeft>
      <HeroLogo />
    </HeroWrapper>
  );
}

export default Hero;
