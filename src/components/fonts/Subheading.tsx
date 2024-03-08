import React, { CSSProperties, ReactNode } from "react";
import { SxProps, Typography } from "@mui/material";

interface Props {
  sx?: SxProps;
  style?: CSSProperties;
  children?: ReactNode | ReactNode[];
}

function Subheading({ sx, style, children }: Props) {
  const baseSx: SxProps = {
    fontSize: 40,
    fontWeight: 600,
    textAlign: "center",
    marginBottom: 5,
  };

  return (
    <Typography
      variant="h2"
      color="inherit"
      sx={
        sx
          ? {
              ...baseSx,
              ...sx,
            }
          : baseSx
      }
      style={style || {}}
    >
      {children}
    </Typography>
  );
}

export default Subheading;
