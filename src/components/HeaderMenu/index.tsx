import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@mui/material";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import CustomMenuItem from "./CustomMenuItem";

// Styles
import { Wrapper, RightSide, LeftSide, LogoImg } from "./index.styles";
import "./index.css";

// Images
import DannyAvatarImg from "../../assets/images/team/danny-avatar-bw.png";
import MobileMenu from "../MobileMenu";

interface Props {
  opacity: number;
}

function HeaderMenu({ opacity }: Props) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const HeaderMenuBody: JSX.Element = (
    <>
      <LeftSide>
        <Button variant="text" onClick={() => navigateToUrl("/", true)}>
          <LogoImg src={DannyAvatarImg} alt="Danny Lim" />
        </Button>
      </LeftSide>
      <RightSide>
        <CustomMenuItem text="Home" route="/" />
        <CustomMenuItem text="About" route="/about" />
        <CustomMenuItem text="Portfolio" route="/portfolio" />
        {/* <CustomMenuItem text="Blog" route="/blog" /> */}
      </RightSide>
    </>
  );

  return (
    <Wrapper
      data-testid="desktop-navigation"
      className="navbar"
      style={{
        // background: `linear-gradient(to bottom, rgba(14, 14, 14, ${opacity}) 0%, rgba(14, 14, 14, ${opacity}) 100%)`,
        background: `linear-gradient(to bottom, rgba(14, 14, 14, ${1}) 0%, rgba(14, 14, 14, ${1}) 100%)`,
        justifyContent: isMobile ? "flex-end" : "space-between",
        width: "100vw",
      }}
    >
      {isMobile ? <MobileMenu /> : HeaderMenuBody}
    </Wrapper>
  );
}

export default HeaderMenu;
