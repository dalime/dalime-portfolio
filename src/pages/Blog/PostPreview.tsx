import React from "react";

// Types
import { WPPost } from "../../types";

// Components
import { H3, H4, Backdrop } from "../../components";

interface Props {
  postDetails: WPPost;
  setActive(): void;
  mobile: boolean;
  teamMember?: string;
}

function PostPreview({ postDetails, setActive, mobile, teamMember }: Props) {
  const { title, excerpt, x_featured_media_medium } = postDetails;

  return (
    <Backdrop onClick={() => setActive()} style={{ cursor: "pointer" }}>
      <H3 style={mobile ? { fontSize: 22, textAlign: "center" } : {}}>
        {title.rendered}
      </H3>
      <H4
        style={
          mobile ? { fontSize: 16, textAlign: "center" } : { fontSize: 18 }
        }
      >
        By {teamMember}
      </H4>
      {x_featured_media_medium && (
        <img
          src={x_featured_media_medium}
          alt={`Featured media for post ${title}`}
        />
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: mobile
            ? `${excerpt.rendered.substring(0, 200)}...`
            : excerpt.rendered,
        }}
      />
    </Backdrop>
  );
}

export default PostPreview;
