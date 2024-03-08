import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Animated Slider
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

// Types
import { ClientReview } from "../../../types";

// Components
import {
  Section,
  Subheading,
  H3,
  Paragraph,
  Backdrop,
  StarRating,
} from "../../../components";

// Styles
import "./index.css";
import "./horizontal.css";

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
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Get Reviews from Environment Variables
  const clientReview1: ClientReview | null = process.env.REACT_APP_REVIEW_1
    ? JSON.parse(process.env.REACT_APP_REVIEW_1)
    : null;
  const clientReview2: ClientReview | null = process.env.REACT_APP_REVIEW_2
    ? JSON.parse(process.env.REACT_APP_REVIEW_2)
    : null;
  const clientReview3: ClientReview | null = process.env.REACT_APP_REVIEW_3
    ? JSON.parse(process.env.REACT_APP_REVIEW_3)
    : null;
  const portfolioItems = [clientReview1, clientReview2, clientReview3];
  // const [portfolioItems, setPortfolioItems] = useState<(ClientReview | null)[]>(
  //   [clientReview1, clientReview2, clientReview3]
  // );

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     for (let i = 0; i < 3; i++) {
  //       const image = await loadImage(process.env.REACT_APP_IMAGE_PATH || "");
  //       const portfolioItemsCopy = [...portfolioItems];
  //       const portfolioItemByIndex = portfolioItemsCopy[i];
  //       const portfolioItem: ClientReview = {
  //         clientImg: portfolioItemByIndex?.clientImg || "",
  //         company: portfolioItemByIndex?.company || "",
  //         feedback: portfolioItemByIndex?.feedback || "",
  //         name: portfolioItemByIndex?.name || "",
  //         rating: portfolioItemByIndex?.rating || 0,
  //         clientImgLoaded: image,
  //       };
  //       portfolioItemsCopy[i] = portfolioItemByIndex ? portfolioItem : null;
  //       console.log("portfolioItemsCopy", portfolioItemsCopy);
  //       setPortfolioItems(portfolioItemsCopy);
  //     }
  //   };

  //   fetchImages();
  // }, []);

  return (
    <Section
      style={{
        paddingTop: "7.5%",
        paddingBottom: "7.5%",
      }}
    >
      <Subheading sx={isMobile ? { fontSize: 30 } : {}}>
        What Our Clients Say
      </Subheading>
      <Slider
        previousButton={SliderButton(true, isMobile)}
        nextButton={SliderButton(false, isMobile)}
        style={{
          height: "fit-content !important",
        }}
      >
        {portfolioItems.map((item, index) => {
          if (!item) return <></>;
          const { name, feedback, clientImgName, rating } = item;
          return (
            <div key={`client-review-${index}`}>
              <Backdrop className="center">
                <H3>{name}</H3>
                {clientImgName && (
                  <img
                    src={require(`../../../assets/images/testimonials/${clientImgName}`)}
                    alt={`Review from ${name}`}
                    style={{
                      width: 150,
                      height: 150,
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
