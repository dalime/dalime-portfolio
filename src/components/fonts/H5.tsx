import React, { CSSProperties, ReactNode } from "react";
import { Typography } from "@mui/material";

interface Props {
  style?: CSSProperties;
  children?: ReactNode | ReactNode[];
}

function H5({ style, children }: Props) {
  return (
    <Typography
      variant="h5"
      sx={{ fontSize: 16, fontWeight: 400, marginBottom: 0.75 }}
      style={style || {}}
    >
      {children}
    </Typography>
  );
}

export default H5;
