import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { Typography, Button } from "@mui/material";
import { Code, Visibility } from "@mui/icons-material";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import Backdrop from "../Backdrop";

// Styles
import { Img, RightColumn, ButtonWrapper } from "./index.styles";
import "./index.css";

interface SubtitleProps {
  children?: ReactNode | ReactNode[];
}

function Subtitle({ children }: SubtitleProps): JSX.Element {
  return (
    <Typography
      variant="h4"
      sx={{
        fontSize: 18,
        fontWeight: 400,
        textTransform: "uppercase",
        marginBottom: 2,
      }}
    >
      {children}
    </Typography>
  );
}

interface Props {
  title: string;
  description: string;
  role: string;
  imgSrc: string;
  feedback?: string;
  viewLink?: string;
  codeLink?: string;
}

function PortfolioItem({
  title,
  description,
  role,
  feedback,
  imgSrc,
  viewLink,
  codeLink,
}: Props) {
  const isSmallScreen = useMediaQuery({ maxWidth: 1100 });
  const isMobile = useMediaQuery({ maxWidth: 720 });

  return (
    <Backdrop
      data-testid="portfolio-item"
      width={isMobile || isSmallScreen ? "90%" : "50%"}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: 3,
      }}
    >
      {imgSrc && (
        <button
          type="button"
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
          onClick={() => (viewLink ? navigateToUrl(viewLink) : {})}
        >
          <Img
            src={imgSrc}
            alt={`Preview of portfolio item ${title}`}
            className="portfolio-item-img"
          />
        </button>
      )}
      <RightColumn>
        {title && (
          <Typography
            variant="h3"
            sx={{ fontSize: 26, fontWeight: 400, marginBottom: 2 }}
          >
            {title}
          </Typography>
        )}
        {description && (
          <>
            <Subtitle>The Project</Subtitle>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {description}
            </Typography>
          </>
        )}
        {role && (
          <>
            <Subtitle>Our Role</Subtitle>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {role}
            </Typography>
          </>
        )}
        {feedback && (
          <>
            <Subtitle>Feedback</Subtitle>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {feedback}
            </Typography>
          </>
        )}
        <ButtonWrapper>
          {codeLink && (
            <Button
              variant="contained"
              startIcon={<Code />}
              onClick={() => navigateToUrl(codeLink)}
            >
              Code
            </Button>
          )}
          {viewLink && (
            <Button
              variant="contained"
              startIcon={<Visibility />}
              onClick={() => navigateToUrl(viewLink)}
            >
              View
            </Button>
          )}
        </ButtonWrapper>
      </RightColumn>
    </Backdrop>
  );
}

export default PortfolioItem;
