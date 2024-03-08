import React, { useState, useEffect, ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { Button, SxProps } from "@mui/material";
import {
  CheckBoxOutlineBlank,
  CheckBox,
  AppShortcut,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import Lottie from "react-lottie";

// Helpers
import { navigateToUrl } from "../../../helpers";

// Components
import { H3, Paragraph } from "../../../components";

// Styles
import { Wrapper, Column } from "./index.styles";

// Assets
import videoCallJson from "../../../assets/lottie-jsons/video-call.json";
import designJson from "../../../assets/lottie-jsons/design.json";
import landingPageJson from "../../../assets/lottie-jsons/landing-page.json";
import testServerJson from "../../../assets/lottie-jsons/test-server.json";
import pmBoardJson from "../../../assets/lottie-jsons/project-mgmt-board.json";
import codingJson from "../../../assets/lottie-jsons/coding.json";
import agileSprintsJson from "../../../assets/lottie-jsons/agile-sprints.json";
import deployingJson from "../../../assets/lottie-jsons/deploying.json";
import deployJson from "../../../assets/lottie-jsons/deploy.json";
import supportJson from "../../../assets/lottie-jsons/support.json";
import moneyBagsJson from "../../../assets/lottie-jsons/moneybags.json";

interface TextProps {
  key: string | number;
  children?: ReactNode | ReactNode[];
  timeDelay?: number;
  center?: boolean;
}

/**
 * The Text component that shows in the process steps
 * @param key string | number
 * @param children ReactNode | ReactNode[] | undefined
 * @param timeDelay number | undefined
 * @returns JSX.Element
 */
function Text({ key, children, timeDelay }: TextProps): JSX.Element {
  const [visible, setVisible] = useState<boolean>(timeDelay ? false : true);

  useEffect(() => {
    if (timeDelay) {
      setTimeout(() => {
        setVisible(true);
      }, timeDelay);
    }
  }, [timeDelay]);

  if (!visible) return <></>;

  return (
    <Paragraph
      key={key}
      sx={{
        textAlign: "center",
        marginBottom: 2,
        marginTop: 2,
      }}
      className="fade-in-slow"
    >
      {children}
    </Paragraph>
  );
}

/**
 * The H3 component that shows in the process steps
 * @param key string | number
 * @param children ReactNode | ReactNode[] | undefined
 * @returns JSX.Element
 */
function StepHeading({ key, children }: TextProps): JSX.Element {
  return (
    <H3
      key={key}
      className="fade-in-slow"
      style={{ marginBottom: 10, marginTop: 10, textAlign: "center" }}
    >
      {children}
    </H3>
  );
}

// Options for Lottie animation
const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

interface AnimationProps {
  key: number | string;
  jsonPath: any;
  imageWidth: number;
  timeDelay?: number;
}

/**
 * The Lottie Animation that shows up for process steps
 * @param key number | string
 * @param jsonPath any
 * @param imageWidth number
 * @param timeDelay number | undefined
 * @returns JSX.Element
 */
function Animation({
  key,
  jsonPath,
  imageWidth,
  timeDelay,
}: AnimationProps): JSX.Element {
  const [visible, setVisible] = useState<boolean>(timeDelay ? false : true);

  useEffect(() => {
    if (timeDelay) {
      setTimeout(() => {
        setVisible(true);
      }, timeDelay);
    }
  }, [timeDelay]);

  if (!visible) return <></>;

  return (
    <Lottie
      key={key}
      options={{ ...defaultOptions, animationData: jsonPath }}
      height={undefined}
      width={imageWidth}
      isStopped={false}
      isPaused={false}
      style={{ opacity: visible ? 1 : 0 }}
    />
  );
}
interface NextButtonProps {
  key: string | number;
  toNextStep(): void;
  text?: string;
  sx?: SxProps;
  className?: string;
}

/**
 * Next Step Button
 * @param toNextStep () => void
 * @returns JSX.Element
 */
function NextButton({
  key,
  toNextStep,
  text,
  sx,
  className,
}: NextButtonProps): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);
  const [hovering, setHovering] = useState<boolean>(false);

  const handleClick = (): void => {
    setChecked(true);
    setTimeout(() => {
      toNextStep();
    }, 350);
  };

  return (
    <Button
      key={key}
      className={className || ""}
      variant="text"
      color={hovering || checked ? "success" : "secondary"}
      startIcon={
        checked ? (
          <CheckBox fontSize="large" style={{ width: 30, height: "auto" }} />
        ) : (
          <CheckBoxOutlineBlank
            fontSize="large"
            style={{ width: 30, height: "auto" }}
          />
        )
      }
      sx={sx ? { ...sx, fontSize: 18 } : { fontSize: 18 }}
      onClick={() => handleClick()}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {text || "Next"}
    </Button>
  );
}

function Process() {
  // Hooks
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmallMobile = useMediaQuery({ maxWidth: 562 });

  // State
  const [journeyStep, setJourneyStep] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [finishRocket, setFinishRocket] = useState<boolean>(false);

  // Effects
  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (journeyStep === 9) {
      setTimeout(() => {
        setFinishRocket(true);
      }, 3500);
    }
  }, [journeyStep]);

  const imageWidth = isSmallMobile
    ? windowWidth * 0.5
    : isMobile
    ? Math.min(windowWidth * 0.6, 300)
    : 300;
  const moneyWidth = isSmallMobile
    ? windowWidth * 0.3
    : isMobile
    ? Math.min(windowWidth * 0.4, 200)
    : 200;

  /**
   * Renders the necessary Lottie Animation
   * @param key string | number
   * @param jsonPath any
   * @param timeDelay number | undefined
   * @returns JSX.Element
   */
  const renderLottieJson = (
    key: string | number,
    jsonPath: any,
    timeDelay?: number
  ): JSX.Element => {
    return (
      <Animation
        key={key}
        jsonPath={jsonPath}
        imageWidth={imageWidth}
        timeDelay={timeDelay}
      />
    );
  };

  /**
   * Render the last lottie animation
   * @param jsonPath
   * @param timeDelay
   * @returns
   */
  const renderFinishLottie = (): JSX.Element => {
    if (finishRocket) {
      return (
        <Column>
          <AppShortcut
            fontSize="large"
            style={{
              width: isMobile ? 75 : 150,
              height: "auto",
              color: grey[200],
              marginBottom: 30,
            }}
          />
          <Animation
            key="step-9-animation-1"
            jsonPath={moneyBagsJson}
            imageWidth={moneyWidth}
          />
        </Column>
      );
    } else {
      return (
        <Animation
          key="step-9-animation"
          jsonPath={deployJson}
          imageWidth={imageWidth}
        />
      );
    }
  };

  /**
   * Renders the elements for the current step in the journey
   * @returns JSX.Element
   */
  const renderJourneyStep = (): JSX.Element => {
    switch (journeyStep) {
      case 1:
        // Zoom Call
        return (
          <>
            {renderLottieJson("step-1-animation", videoCallJson)}
            <StepHeading key="step-1-heading">#1 - Strategy Call</StepHeading>
            <Text key="step-1-text">
              We'll discuss your project and create a project plan
            </Text>
            <NextButton key={"step-1"} toNextStep={() => setJourneyStep(2)} />
          </>
        );
      case 2:
        // Design Rounds
        return (
          <>
            {renderLottieJson("step-2-animation", designJson)}
            <StepHeading key="step-2-heading">#2 - Design Rounds</StepHeading>
            <Text key="step-2-text">
              Receive a mock-up you love with the help of our UI Designer
            </Text>
            <NextButton key={"step-2"} toNextStep={() => setJourneyStep(3)} />
          </>
        );
      case 3:
        // Project Management Board
        return (
          <>
            {renderLottieJson("step-3-animation", landingPageJson)}
            <StepHeading key="step-3-heading">#3 - Landing Page</StepHeading>
            <Text key="step-3-text">
              A Landing Page for your app to garner interest and collect emails
            </Text>
            <NextButton key={"step-3"} toNextStep={() => setJourneyStep(4)} />
          </>
        );
      case 4:
        // Project Management Board
        return (
          <>
            {renderLottieJson("step-4-animation", pmBoardJson)}
            <StepHeading key="step-4-heading">
              #4 - Project Plan + Board
            </StepHeading>
            <Text key="step-4-text">
              Detailed Project Plan with feature list and deadlines on a Kanban
              Board
            </Text>
            <NextButton key={"step-4"} toNextStep={() => setJourneyStep(5)} />
          </>
        );
      case 5:
        // Test Server
        return (
          <>
            {renderLottieJson("step-5-animation", testServerJson)}
            <StepHeading key="step-5-heading">#5 - Test Server</StepHeading>
            <Text key="step-5-text">
              A private Test Server so you can view development progress
            </Text>
            <NextButton key={"step-5"} toNextStep={() => setJourneyStep(6)} />
          </>
        );
      case 6:
        // Version 1 Sprints
        return (
          <>
            {renderLottieJson("step-6-animation", codingJson)}
            <StepHeading key="step-6-heading">#6 - Dev Sprints</StepHeading>
            <Text key="step-6-text">
              The coding magic to make your app real
            </Text>
            {renderLottieJson("step-6-animation-1", agileSprintsJson)}
            <Text key="step-6-text-1">
              Agile Sprints for features with frequent deployments to your Test
              and Live server
            </Text>
            <NextButton key={"step-6"} toNextStep={() => setJourneyStep(7)} />
          </>
        );
      case 7:
        // Deploy
        return (
          <>
            {renderLottieJson("step-7-animation", deployingJson)}
            <StepHeading key="step-7-heading">#7 - Deploy</StepHeading>
            <Text key="step-7-text">
              Your App will be deployed at the end of every Sprint
            </Text>
            <NextButton key={"step-7"} toNextStep={() => setJourneyStep(8)} />
          </>
        );
      case 8:
        // Continued Support
        return (
          <>
            {renderLottieJson("step-8-animation", supportJson)}
            <StepHeading key="step-8-heading">
              #8 - Continued Support
            </StepHeading>
            <Text key="step-8-text">
              We'll continue to squash bugs, develop new features, and consult
              you on best practices
            </Text>
            <NextButton key={"step-8"} toNextStep={() => setJourneyStep(9)} />
          </>
        );
      case 9:
        // Start Now
        return (
          <>
            {renderFinishLottie()}
            {finishRocket && (
              <>
                <Button
                  className="pulse"
                  onClick={() =>
                    process.env.REACT_APP_CALL_LINK
                      ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
                      : {}
                  }
                  sx={{ padding: 2, marginBottom: 4 }}
                >
                  Print Money
                </Button>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={() => {
                    setJourneyStep(0);
                    setFinishRocket(false);
                  }}
                >
                  View Again
                </Button>
              </>
            )}
          </>
        );
      default:
        return (
          <Column>
            <Button
              className="pulse"
              variant="contained"
              onClick={() => setJourneyStep(1)}
              sx={{ padding: 3 }}
            >
              Get Started
            </Button>
          </Column>
        );
    }
  };

  return <Wrapper>{renderJourneyStep()}</Wrapper>;
}

export default Process;
