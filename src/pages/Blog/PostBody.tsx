import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

// Types
import { AuthorInformation } from "./types";

// Components
import AuthorInfo from "./AuthorInfo";
import { Page, MainHeading } from "../../components";

// Styles
import "./index.css";

interface Props {
  title: string;
  body: string;
  closePost(): void;
  authorInfo?: AuthorInformation;
}

function PostBody({ title, body, closePost, authorInfo }: Props) {
  const isTablet = useMediaQuery({ maxWidth: 1000 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmallMobile = useMediaQuery({ maxWidth: 380 });

  const sidePadding: string | number = isSmallMobile
    ? 30
    : isMobile
    ? 40
    : isTablet
    ? "5%"
    : "7%";

  if (!body) return <></>;

  return (
    <Page>
      <div
        style={{
          paddingLeft: sidePadding,
          paddingRight: sidePadding,
          paddingBottom: 30,
          paddingTop: 20,
        }}
      >
        <Button onClick={() => closePost()}>
          <ArrowBack style={{ marginRight: 10 }} />
          Back to Blog Posts
        </Button>
        <MainHeading style={isMobile ? { fontSize: 30 } : { fontSize: 40 }}>
          {title}
        </MainHeading>
        {authorInfo && (
          <p style={{ fontSize: isMobile ? 14 : 18 }}>
            By <span style={{ color: yellow[500] }}>{authorInfo.name}</span>
          </p>
        )}
        <div dangerouslySetInnerHTML={{ __html: body }} />
        {authorInfo && (
          <AuthorInfo
            isMobile={isMobile}
            isTablet={isTablet}
            info={authorInfo}
          />
        )}
      </div>
    </Page>
  );
}

export default PostBody;
