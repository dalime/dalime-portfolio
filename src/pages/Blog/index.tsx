import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
import { CircularProgress, IconButton, Alert } from "@mui/material";
import { Close } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

// Types
import { WPPost } from "../../types";
import { AuthorInformation } from "./types";

// Actions
import { fetchPosts } from "../../actions";

// Components
import PostPreview from "./PostPreview";
import PostBody from "./PostBody";
import { Page, MainHeading, Subheading } from "../../components";

// Styles
import { PreviewsList, ErrorWrapper } from "./index.styles";

// Assets
import DannyLimLogo from "../../assets/images/dannylim-logo.png";
import DannyAvatarImg from "../../assets/images/team/danny-avatar.png";

interface WPPostWithAuthor extends WPPost {
  authorInfo: AuthorInformation | null;
}

function Blog() {
  // Hooks
  const mobile = useMediaQuery({ maxWidth: 768 });

  // State
  const [blogPosts, setBlogPosts] = useState<WPPost[]>([]);
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [activePost, setActivePost] = useState<WPPostWithAuthor | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setFetchLoading(true);
        const postsResponse = await fetchPosts();
        setFetchLoading(false);
        setBlogPosts(postsResponse || []);
      } catch (error) {
        setFetchLoading(false);
        setFetchError("Could not fetch blog posts");
      }
    };

    fetchBlogPosts();
  }, []);


  const renderBlogPosts = (): JSX.Element[] => {
    if (!blogPosts) return [];

    return blogPosts.map((blogPost: WPPost) => {
      const authorInfo: AuthorInformation = {
        name: "Danny Lim",
        profileImg: DannyAvatarImg,
        linkedIn: "https://www.linkedin.com/in/dalime",
      };
      const blogPostWithAuthor: WPPostWithAuthor = { ...blogPost, authorInfo };
      return (
        <PostPreview
          key={`team-blog-post-preview-${blogPost.id}`}
          postDetails={blogPost}
          setActive={() => setActivePost(blogPostWithAuthor)}
          mobile={mobile}
          teamMember="Danny Lim"
        />
      );
    });
  };

  if (activePost)
    return (
      <PostBody
        title={activePost.title.rendered}
        body={activePost.content.rendered}
        closePost={() => setActivePost(null)}
        authorInfo={activePost.authorInfo || undefined}
      />
    );

  const headingColor = { color: blue[300] };

  const marginTopStyle = { marginTop: 3 };

  const renderBlogSection = (): JSX.Element => {
    return fetchError ? (
      <ErrorWrapper mobile={mobile || false}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setFetchError(null);
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          {fetchError}
        </Alert>
      </ErrorWrapper>
    ) : (blogPosts.length) ? (
      <>
        <Subheading
          sx={
            mobile
              ? {
                  ...marginTopStyle,
                  fontSize: 26,
                  marginLeft: 2,
                  marginRight: 2,
                }
              : marginTopStyle
          }
        >
          By Danny Lim
        </Subheading>
        <PreviewsList>
          {renderBlogPosts()}
        </PreviewsList>
      </>
    ) : (
      <></>
    );
  };

  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog - Danny Lim</title>
        <meta
          name="description"
          content="Danny Lim's blog that talks about trends in multiple industries, best practices, and new solutions to emerging problems."
        />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://dannylim.io/blog/" />
        <meta name="generator" content="All in One SEO (AIOSEO) 4.3.6.1 " />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content="Danny Lim - Technical Product Manager & Senior Developer"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog - Danny Lim" />
        <meta
          property="og:description"
          content="Danny Lim's blog that talks about trends in multiple industries, best practices, and new solutions to emerging problems."
        />
        <meta property="og:url" content="https://dannylim.io/blog/" />
        <meta property="og:image" content={DannyLimLogo} />
        <meta property="og:image:secure_url" content={DannyLimLogo} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="article:tag" content="blog" />
        <meta property="article:tag" content="developer blog" />
        <meta
          property="article:published_time"
          content="2023-08-08T17:37:41+00:00"
        />
        <meta
          property="article:modified_time"
          content="2023-08-08T18:11:51+00:00"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Blog - Danny Lim" />
        <meta
          name="twitter:description"
          content="Danny Lim's blog that talks about trends in multiple industries, best practices, and new solutions to emerging problems."
        />
        <meta name="twitter:image" content={DannyLimLogo} />
      </Helmet>

      <MainHeading
        align="center"
        sx={mobile ? { ...headingColor, fontSize: 40 } : headingColor}
      >
        Blog
      </MainHeading>
      {fetchLoading ? (
        <div style={{ width: "100%", textAlign: "center", marginTop: 50 }}>
          <CircularProgress size={mobile ? 80 : 120} />
        </div>
      ) : (
        <>
          {renderBlogSection()}
        </>
      )}
    </Page>
  );
}

export default Blog;
