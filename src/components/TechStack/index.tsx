import React, { CSSProperties, ReactNode, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SxProps, Button } from "@mui/material";
import { yellow } from "@mui/material/colors";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import Section from "../Section";
import { Paragraph, Subheading } from "../fonts";

// Styles
import { Rows, Column, TechWrapper, TechText, TechImg } from "./index.styles";

// Assets
import reactIcon from "../../assets/images/techstack/react-icon.png";
import nodeIcon from "../../assets/images/techstack/nodejs-icon.png";
import awsS3Icon from "../../assets/images/techstack/aws-s3-icon.png";
import graphQlIcon from "../../assets/images/techstack/graphql-icon.png";
import mongoDbIcon from "../../assets/images/techstack/mongodb-icon.png";
import awsEc2Icon from "../../assets/images/techstack/aws-ec2-icon.png";
import typescriptIcon from "../../assets/images/techstack/typescript-logo.png";
import postgresQlIcon from "../../assets/images/techstack/postgresql-icon.png";
import awsEcsIcon from "../../assets/images/techstack/aws-ecs-icon.png";

interface SubHeadProps {
  isMobile: boolean;
  children?: ReactNode | ReactNode[];
}

/**
 * Subheading with mobile style
 * @param isMobile boolean
 * @param children ReactNode | ReactNode[] | undefined
 * @returns
 */
function SubHead({ isMobile, children }: SubHeadProps): JSX.Element {
  return (
    <Subheading sx={isMobile ? { fontSize: 30 } : {}}>{children}</Subheading>
  );
}

interface SectionCutProps {
  children?: ReactNode | ReactNode[];
  style?: CSSProperties;
}

/**
 * Subheading with mobile style
 * @param children ReactNode | ReactNode[] | undefined
 * @param style CSSProperties | undefined
 * @returns
 */
function SectionCut({ children, style }: SectionCutProps): JSX.Element {
  const baseStyle = { paddingTop: "7.5%", paddingBottom: "7.5%" };

  return (
    <Section style={style ? { ...baseStyle, ...style } : baseStyle}>
      {children}
    </Section>
  );
}

interface Props {
  noAction?: boolean;
}

function TechStack({ noAction }: Props) {
  // Hooks
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // State
  const [techHovering, setTechHovering] = useState<string | null>(null);

  // Style
  const paragraphSx: SxProps = {
    textAlign: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: 2,
  };
  const paddingSide = {
    paddingLeft: "10%",
    paddingRight: "10%",
  };
  const columnCenter: CSSProperties = {
    display: "fex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  /**
   * Navigates user to a link based on what technology is provided
   * @param name string
   */
  const navigateToTech = (name: string): void => {
    let url = "";
    switch (name) {
      case "React":
        url = "https://react.dev/";
        break;
      case "GraphQL":
        url = "https://graphql.org/";
        break;
      case "Typescript":
        url = "https://www.typescriptlang.org/";
        break;
      case "Node.js":
        url = "https://nodejs.org/en";
        break;
      case "MongoDB":
        url = "https://www.mongodb.com/";
        break;
      case "PostgreSQL":
        url = "https://www.postgresql.org/";
        break;
      case "AWS S3":
        url = "https://aws.amazon.com/s3/";
        break;
      case "AWS EC2":
        url = "https://aws.amazon.com/ec2";
        break;
      case "AWS ECS":
        url = "https://aws.amazon.com/ecs";
        break;
      default:
        break;
    }
    navigateToUrl(url);
  };

  /**
   * Renders a technology logo and name for the Tech Stack
   * @param imgSrc string
   * @param name strig
   * @returns JSX.Element
   */
  const renderTech = (imgSrc: string, name: string): JSX.Element => (
    <TechWrapper
      onMouseEnter={() => setTechHovering(name)}
      onMouseLeave={() => setTechHovering(null)}
      onClick={() => navigateToTech(name)}
    >
      <TechImg src={imgSrc} alt={name} />
      <TechText style={techHovering === name ? { color: yellow[500] } : {}}>
        {name}
      </TechText>
    </TechWrapper>
  );

  return (
    <SectionCut
      style={{
        ...paddingSide,
        ...columnCenter,
        marginBottom: 30,
      }}
    >
      <SubHead isMobile={isMobile}>Our Specialized Tech Stack</SubHead>
      <Paragraph sx={paragraphSx}>
        We have a core tech stack in which we specialize, ensuring world-class
        quality with it.
      </Paragraph>
      <Rows>
        <Column>
          {renderTech(reactIcon, "React")}
          {renderTech(nodeIcon, "Node.js")}
          {renderTech(awsS3Icon, "AWS S3")}
        </Column>
        <Column>
          {renderTech(graphQlIcon, "GraphQL")}
          {renderTech(mongoDbIcon, "Mongo DB")}
          {renderTech(awsEc2Icon, "AWS EC2")}
        </Column>
        <Column>
          {renderTech(typescriptIcon, "Typescript")}
          {renderTech(postgresQlIcon, "PostgreSQL")}
          {renderTech(awsEcsIcon, "AWS ECS")}
        </Column>
      </Rows>
      <Paragraph sx={paragraphSx}>
        Depending on your project needs, we can adjust the technology stack
        accordingly.
      </Paragraph>
      {!noAction && (
        <Button
          className="pulse"
          variant="contained"
          color="primary"
          onClick={() =>
            process.env.REACT_APP_CALL_LINK
              ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
              : {}
          }
          sx={{ marginTop: 5, padding: 2 }}
        >
          Book 1:1 Strategy Call
        </Button>
      )}
    </SectionCut>
  );
}

export default TechStack;
