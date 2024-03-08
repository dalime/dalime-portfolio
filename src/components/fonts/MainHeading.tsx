import React, { CSSProperties, ReactNode } from "react";
import { Typography, SxProps } from "@mui/material";

interface Props {
  align?: "left" | "center" | "right";
  style?: CSSProperties;
  sx?: SxProps;
  children?: ReactNode | ReactNode[];
}

function MainHeading({ align, style, sx, children }: Props) {
  const baseSx: SxProps = {
    fontWeight: 600,
    fontSize: 60,
    textAlign: align || "auto",
  };

  return (
    <Typography
      variant="h1"
      sx={sx ? { ...baseSx, ...sx } : baseSx}
      style={style || {}}
    >
      {children}
    </Typography>
  );
}

export default MainHeading;
