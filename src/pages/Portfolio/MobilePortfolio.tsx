import React, { useEffect, useState } from "react";
import { List, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

// Types
import { PortfolioItemInterface } from "../../types";

// Components
import ProjectDetails from "./ProjectDetails";
import PortfolioItem from "./PortfolioItem";
import Placeholder from "./Placeholder";
import PreviewOverlay from "./PreviewOverlay";
import { Page, Section, MainHeading, Subheading } from "../../components";

// Styles
import {
  MobileWrapper,
  MobileProjectPreview,
  PreviewWrapper,
  MobileProjectsList,
  MatrixBackdrop,
  MobilePreviewImg,
} from "./index.styles";
import "./index.css";

// Assets
import MatrixBackground from "../../assets/images/matrix-background.gif";

interface MobilePortfolioItemInterface extends PortfolioItemInterface {
  mobileImgSrc: string;
}

function MobilePortfolio() {
  const [hoveringItem, setHoveringItem] = useState<number | null>(null);
  const [activeItem, setActiveItem] =
    useState<MobilePortfolioItemInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /**
   * Changes the active item to preview and kicks off the matrix animation to show
   * @param newItem PortfolioItemInterface | null
   */
  const changeProject = (newItem: PortfolioItemInterface | null): void => {
    if (newItem) setLoading(true);
    const newItemMobile: MobilePortfolioItemInterface | null = newItem
      ? {
          ...newItem,
          mobileImgSrc:
            newItem.mobileImg && height > width
              ? newItem.mobileImg
              : newItem.imgSrc,
        }
      : null;
    setActiveItem(newItemMobile);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  /**
   * Renders portfolio items
   * @returns JSX.Element[]
   */
  const renderPortfolioItems = (): JSX.Element[] => {
    const item1 = process.env.REACT_APP_PORTFOLIO_ITEM_1 || null;
    const item2 = process.env.REACT_APP_PORTFOLIO_ITEM_2 || null;
    const item3 = process.env.REACT_APP_PORTFOLIO_ITEM_3 || null;
    const items = [];
    if (item1) items.push(item1);
    if (item2) items.push(item2);
    if (item3) items.push(item3);

    return items.map((item, index) => {
      if (!item) return <></>;
      const portfolioItem = JSON.parse(item) as PortfolioItemInterface;
      return (
        <PortfolioItem
          key={`portfolio-list-item-${index}`}
          index={index}
          portfolioItem={portfolioItem}
          hoveringItem={hoveringItem}
          setHoveringItem={setHoveringItem}
          setActiveItem={changeProject}
        />
      );
    });
  };

  const { width, height } = windowDimensions;

  return (
    <Page>
      <Section padding={20} style={{ paddingTop: 0 }}>
        <MainHeading
          align="center"
          style={{
            marginBottom: 10,
            fontSize: 26,
            color: yellow[300],
          }}
        >
          Portfolio
        </MainHeading>
        <MobileWrapper>
          {showPreview ? (
            <>
              <Button onClick={() => setShowPreview(false)}>
                {activeItem ? "Hide" : "Close"}
              </Button>
              <MobileProjectPreview
                style={
                  loading
                    ? {
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                      }
                    : {}
                }
              >
                {loading ? (
                  <MatrixBackdrop
                    src={MatrixBackground}
                    alt="Matrix background"
                    style={{
                      height: "100%",
                      width: "auto",
                      objectFit: "cover",
                      maxWidth: "none",
                    }}
                  />
                ) : activeItem && activeItem.mobileImgSrc ? (
                  <PreviewWrapper
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      overflow: "hidden",
                      border: "none",
                    }}
                  >
                    {activeItem && <PreviewOverlay project={activeItem} />}
                    <MobilePreviewImg
                      src={require(`../../assets/images/portfolio/${activeItem.mobileImgSrc}`)}
                      alt="Preview of the project being hovered"
                      loading="lazy"
                      heightLessThanWidth={height < width}
                    />
                  </PreviewWrapper>
                ) : (
                  <Placeholder isMobile />
                )}
              </MobileProjectPreview>
            </>
          ) : (
            <>
              <Button onClick={() => setShowPreview(true)}>
                {activeItem ? "Preview" : "Demo"}
              </Button>
              <MobileProjectsList>
                <Subheading
                  sx={{
                    paddingRight: 2,
                    paddingTop: 2,
                    fontSize: 20,
                    marginBottom: 0,
                  }}
                >
                  {activeItem ? (
                    <>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingLeft: 20,
                          width: "100%",
                        }}
                      >
                        {activeItem.title}
                        <Button onClick={() => changeProject(null)}>
                          <Close fontSize="medium" />
                        </Button>
                      </div>
                      <ProjectDetails project={activeItem} isMobile />
                    </>
                  ) : (
                    "Projects"
                  )}
                </Subheading>
                {activeItem ? (
                  <></>
                ) : (
                  <List
                    dense={false}
                    sx={{ width: "100%" }}
                    className="fade-in"
                  >
                    {renderPortfolioItems()}
                  </List>
                )}
              </MobileProjectsList>
            </>
          )}
        </MobileWrapper>
      </Section>
    </Page>
  );
}

export default MobilePortfolio;
