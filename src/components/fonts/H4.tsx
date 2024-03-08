import React, { CSSProperties, ReactNode } from "react";
import { Typography } from "@mui/material";

interface Props {
  style?: CSSProperties;
  children?: ReactNode | ReactNode[];
}

function H4({ style, children }: Props) {
  return (
    <Typography
      variant="h4"
      sx={{ fontSize: 20, fontWeight: 500, marginBottom: 1 }}
      style={style || {}}
    >
      {children}
    </Typography>
  );
}

export default H4;
