import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
import { List, Button } from "@mui/material";
import { Close, RemoveRedEye, Code } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

// Types
import { PortfolioItemInterface } from "../../types";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import ProjectDetails from "./ProjectDetails";
import PortfolioItem from "./PortfolioItem";
import Placeholder from "./Placeholder";
import PreviewOverlay from "./PreviewOverlay";
import { Page, Section, MainHeading, Subheading } from "../../components";

// Styles
import {
  Wrapper,
  ProjectPreview,
  PreviewWrapper,
  PreviewImg,
  ProjectsList,
  MatrixBackdrop,
} from "./index.styles";
import MobilePortfolio from "./MobilePortfolio";
import "./index.css";

// Assets
import DannyAvatarImg from "../../assets/images/team/danny-avatar-bw.png";
import MatrixBackground from "../../assets/images/matrix-background.gif";

function Portfolio() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [hoveringItem, setHoveringItem] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<PortfolioItemInterface | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Changes the active item to preview and kicks off the matrix animation to show
   * @param newItem PortfolioItemInterface | null
   */
  const changeProject = (newItem: PortfolioItemInterface | null): void => {
    if (newItem) setLoading(true);
    setActiveItem(newItem);
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
    const item4 = process.env.REACT_APP_PORTFOLIO_ITEM_4 || null;
    const item5 = process.env.REACT_APP_PORTFOLIO_ITEM_5 || null;
    const items = [];
    if (item1) items.push(item1);
    if (item2) items.push(item2);
    if (item3) items.push(item3);
    if (item4) items.push(item4);
    if (item5) items.push(item5);

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

  if (isMobile) return <MobilePortfolio />;

  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio - Danny Lim</title>
        <meta
          name="description"
          content="Danny Lim's web development portfolio of applicable work. You can find recent case studies of how I handled problems and approached solutions for clients."
        />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://dannylim.io/portfolio/" />
        <meta name="generator" content="All in One SEO (AIOSEO) 4.3.6.1 " />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content="Danny Lim - Technical Product Manager & Senior Developer"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Portfolio - Danny Lim" />
        <meta
          property="og:description"
          content="Danny Lim's web development portfolio of applicable work. You can find recent case studies of how I handled problems and approached solutions for clients."
        />
        <meta property="og:url" content="https://dannylim.io/portfolio/" />
        <meta property="og:image" content={DannyAvatarImg} />
        <meta property="og:image:secure_url" content={DannyAvatarImg} />
        <meta
          property="article:published_time"
          content="2023-10-11T08:52:12+00:00"
        />
        <meta
          property="article:modified_time"
          content="2023-10-11T10:15:57+00:00"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio - Danny Lim" />
        <meta
          name="twitter:description"
          content="Danny Lim's web development portfolio of applicable work. You can find recent case studies of how I handled problems and approached solutions for clients."
        />
        <meta name="twitter:image" content={DannyAvatarImg} />
      </Helmet>

      <Section padding={20}>
        <MainHeading
          align="center"
          style={{
            marginBottom: 20,
            fontSize: isMobile ? 30 : 50,
            color: blue[300],
          }}
        >
          Portfolio
        </MainHeading>
        <Wrapper>
          <ProjectPreview>
            {loading ? (
              <MatrixBackdrop src={MatrixBackground} alt="Matrix background" />
            ) : activeItem && activeItem.imgSrc ? (
              <PreviewWrapper>
                {activeItem && <PreviewOverlay project={activeItem} />}
                <PreviewImg
                  src={require(`../../assets/images/portfolio/${activeItem.imgSrc}`)}
                  alt="Preview of the project being hovered"
                  loading="lazy"
                />
              </PreviewWrapper>
            ) : (
              <Placeholder />
            )}
          </ProjectPreview>
          <ProjectsList>
            <Subheading sx={{ paddingRight: 2, paddingTop: 2 }}>
              {activeItem ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingLeft: 20,
                    }}
                  >
                    {activeItem.viewLink && (
                      <Button
                        variant="contained"
                        onClick={() =>
                          activeItem.viewLink
                            ? navigateToUrl(activeItem.viewLink)
                            : {}
                        }
                      >
                        <RemoveRedEye style={{ marginRight: 5 }} />
                        View
                      </Button>
                    )}
                    {activeItem.codeLink && (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() =>
                          activeItem.codeLink
                            ? navigateToUrl(activeItem.codeLink)
                            : {}
                        }
                      >
                        <Code style={{ marginRight: 5 }} />
                        Code
                      </Button>
                    )}
                    <div style={{ width: "100%", textAlign: "right" }}>
                      {activeItem.title}
                      <Button
                        onClick={() => changeProject(null)}
                        style={{ marginLeft: 10 }}
                      >
                        <Close fontSize="large" />
                      </Button>
                    </div>
                  </div>
                  <ProjectDetails project={activeItem} />
                </>
              ) : (
                "Projects"
              )}
            </Subheading>
            {activeItem ? (
              <></>
            ) : (
              <List dense={false} sx={{ width: "100%" }} className="fade-in">
                {renderPortfolioItems()}
              </List>
            )}
          </ProjectsList>
        </Wrapper>
      </Section>
    </Page>
  );
}

export default Portfolio;
