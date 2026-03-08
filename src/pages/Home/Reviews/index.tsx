import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Animated Slider
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

// Data
import { clientReviews } from "../../../data/clientReviews";

// Components
import {
  Section,
  Subheading,
  H3,
  H4,
  Paragraph,
  Backdrop,
  StarRating,
} from "../../../components";

// Styles
import "./index.css";
import "./horizontal.css";

// Images
const testimonialImages = import.meta.glob<{ default: string }>(
  "../../../assets/images/testimonials/*",
  { eager: true }
);

function SliderButton(left: boolean, isMobile: boolean): JSX.Element {
  return (
    <Button variant={isMobile ? "text" : "contained"}>
      {left ? (
        <ChevronLeft fontSize="large" style={{ color: "#ffffff !important" }} />
      ) : (
        <ChevronRight
          fontSize="large"
          style={{ color: "#ffffff !important" }}
        />
      )}
    </Button>
  );
}

function Reviews() {
  // Hooks
  const isTablet = useMediaQuery({ maxWidth: 786 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Section
      style={{
        paddingTop: "7.5%",
        paddingBottom: "7.5%",
      }}
    >
      <Subheading sx={isMobile ? { fontSize: 30 } : {}}>
        What My Clients Say
      </Subheading>
      <Slider
        previousButton={SliderButton(true, isMobile)}
        nextButton={SliderButton(false, isMobile)}
        style={{
          height: "fit-content !important",
        }}
      >
        {clientReviews.map((item, index) => {
          const { name, company, feedback, clientImgName, rating } = item;
          return (
            <div key={`client-review-${index}`}>
              <Backdrop className="center">
                <H3 style={isMobile ? { fontSize: 16 } : {}}>{name}</H3>
                {isTablet ? <></> : <H4 style={{ color: blue[300], marginBottom: 18 }}>{company}</H4>}
                {clientImgName && (
                  <img
                    src={testimonialImages[`../../../assets/images/testimonials/${clientImgName}`]?.default}
                    alt={`Review from ${name}`}
                    style={{
                      width: isMobile ? 100 : 150,
                      height: isMobile ? 100 : 150,
                      objectFit: "contain",
                      borderRadius: "50%",
                      marginBottom: 20,
                    }}
                  />
                )}
                <StarRating rating={rating} />
                <Paragraph>{feedback}</Paragraph>
              </Backdrop>
            </div>
          );
        })}
      </Slider>
    </Section>
  );
}

export default Reviews;
