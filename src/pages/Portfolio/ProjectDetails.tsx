import React, { ReactNode } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Code, Web, Call } from "@mui/icons-material";
import { yellow, grey } from "@mui/material/colors";

// Types
import { PortfolioItemInterface } from "../../types";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import { H3, H4, Paragraph, StarRating } from "../../components";

// Styles
import { ProjectDetailWrapper } from "./index.styles";
import "./index.css";

interface SubHeadingProps {
  noMargin?: boolean;
  children?: ReactNode | ReactNode[];
  isMobile?: boolean;
}

function SubHeading({
  noMargin,
  children,
  isMobile,
}: SubHeadingProps): JSX.Element {
  const baseStyle = { color: grey[200], fontSize: isMobile ? 20 : "auto" };
  return (
    <H3
      style={
        noMargin
          ? baseStyle
          : { ...baseStyle, marginTop: isMobile ? (noMargin ? 0 : 20) : 30 }
      }
    >
      {children}
    </H3>
  );
}

interface BodyTextProps {
  children?: ReactNode | ReactNode[];
  isMobile?: boolean;
}

function BodyText({ children, isMobile }: BodyTextProps): JSX.Element {
  return (
    <Paragraph sx={{ color: grey[400], fontSize: isMobile ? 12 : "auto" }}>
      {children}
    </Paragraph>
  );
}

interface Props {
  project: PortfolioItemInterface;
  isMobile?: boolean;
}

function ProjectDetails({ project, isMobile }: Props) {
  const {
    description,
    role,
    results,
    before,
    work,
    approach,
    feedback,
    codeLink,
    viewLink,
  } = project;

  return (
    <ProjectDetailWrapper
      className="fade-in"
      style={isMobile ? { marginTop: 0 } : {}}
    >
      <SubHeading noMargin isMobile={isMobile || false}>
        Summary
      </SubHeading>
      <BodyText isMobile={isMobile || false}>{description}</BodyText>
      {role && (
        <H4
          style={{
            marginTop: 30,
            color: grey[400],
            fontSize: isMobile ? 16 : "auto",
          }}
        >
          Our Role: <span style={{ color: yellow[500] }}>{role}</span>
        </H4>
      )}
      {results && (
        <>
          <SubHeading isMobile={isMobile || false}>Results</SubHeading>
          <BodyText isMobile={isMobile || false}>{results}</BodyText>
        </>
      )}
      {before && (
        <>
          <SubHeading isMobile={isMobile || false}>
            Before Our Engagement
          </SubHeading>
          <BodyText isMobile={isMobile || false}>{before}</BodyText>
        </>
      )}
      {work && (
        <>
          <SubHeading isMobile={isMobile || false}>The Work We Did</SubHeading>
          <BodyText isMobile={isMobile || false}>{work}</BodyText>
        </>
      )}
      {approach && (
        <>
          <SubHeading isMobile={isMobile || false}>Our Approach</SubHeading>
          <BodyText isMobile={isMobile || false}>{approach}</BodyText>
        </>
      )}
      {feedback && (
        <>
          <SubHeading isMobile={isMobile || false}>Feedback</SubHeading>
          <StarRating rating={5} />
          <BodyText isMobile={isMobile || false}>{feedback}</BodyText>
        </>
      )}
      {codeLink ||
        (viewLink && (
          <>
            <SubHeading isMobile={isMobile || false}>Check It Out</SubHeading>
            <ButtonGroup>
              {codeLink && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => navigateToUrl(codeLink)}
                  sx={isMobile ? { fontSize: 12 } : {}}
                >
                  <Code sx={{ marginRight: 2 }} />
                  Source Code
                </Button>
              )}
              {viewLink && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigateToUrl(viewLink)}
                  sx={isMobile ? { fontSize: 12 } : {}}
                >
                  <Web sx={{ marginRight: 2 }} />
                  View Project
                </Button>
              )}
            </ButtonGroup>
          </>
        ))}
      <SubHeading isMobile={isMobile || false}>
        Get Your Own Sleek App
      </SubHeading>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          process.env.REACT_APP_CALL_LINK
            ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
            : {}
        }
        sx={isMobile ? { fontSize: 12 } : {}}
      >
        <Call sx={{ marginRight: 1 }} />
        Book 1:1 Strategy Call
      </Button>
    </ProjectDetailWrapper>
  );
}

export default ProjectDetails;
