import React, { ReactNode } from "react";
import { SxProps, Typography } from "@mui/material";

interface Props {
  sx?: SxProps;
  className?: string;
  children?: ReactNode | ReactNode[];
}

function Paragraph({ sx, className, children }: Props) {
  const baseSx: SxProps = {
    marginBottom: 1,
  };

  return (
    <Typography
      variant="body1"
      className={className || ""}
      sx={sx ? { ...baseSx, ...sx } : baseSx}
    >
      {children}
    </Typography>
  );
}

export default Paragraph;
