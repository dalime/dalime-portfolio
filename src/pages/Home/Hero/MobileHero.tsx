import React from "react";

// Components
import HeroText from "./HeroText";
import HeroLogo from "./HeroLogo";

// Styles
import { MobileHeroWrapper, MobileHeroTextWrapper } from "./index.styles";

function MobileHero() {
  return (
    <MobileHeroWrapper>
      <MobileHeroTextWrapper>
        <HeroText mobile />
      </MobileHeroTextWrapper>
      <HeroLogo mobile />
    </MobileHeroWrapper>
  );
}

export default MobileHero;
