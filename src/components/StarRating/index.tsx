import React from "react";
import { Rating } from "@mui/material";

import { StarsWrapper } from "./index.styles";

interface Props {
  rating: number;
}

function StarRating({ rating }: Props) {
  return (
    <StarsWrapper>
      <Rating value={rating} readOnly />
    </StarsWrapper>
  );
}

export default StarRating;
