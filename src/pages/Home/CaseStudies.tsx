import React from "react";

// Components
import { PortfolioItem, Section, Subheading } from "../../components";

// Data
import { portfolioItems } from "../../data/portfolioItems";

// Styles
import { CaseStudiesWrapper } from "./index.styles";

function CaseStudies() {
  const renderPortfolioItems = (): JSX.Element[] => {
    return portfolioItems.map((item, index) => {
      const { title, description, role, feedback, imgSrc, viewLink, codeLink } =
        item;
      return (
        <PortfolioItem
          key={`portfolio-item-${index}`}
          title={title}
          description={description}
          role={role}
          feedback={feedback || ""}
          imgSrc={imgSrc}
          viewLink={viewLink || ""}
          codeLink={codeLink || ""}
        />
      );
    });
  };

  if (!portfolioItems.length) return <></>;

  return (
    <Section>
      <CaseStudiesWrapper>
        <Subheading>Case Studies</Subheading>
        {renderPortfolioItems()}
      </CaseStudiesWrapper>
    </Section>
  );
}

export default CaseStudies;
