import React, { CSSProperties, ReactNode } from "react";
import { Paper, SxProps } from "@mui/material";

interface Props {
  width?: string | number;
  height?: string | number;
  children?: ReactNode | ReactNode[];
  style?: CSSProperties;
  sx?: SxProps;
  className?: string;
  onClick?(): void;
}

function Backdrop({
  width,
  height,
  children,
  style,
  sx,
  className,
  onClick,
}: Props) {
  const baseSx: SxProps = {
    padding: 4,
    borderRadius: 3,
    background: "rgba(45, 45, 45, 0.5)",
    width: width || "fit-content",
    height: height || "fit-content",
  };

  return (
    <Paper
      sx={sx ? { ...baseSx, ...sx } : baseSx}
      style={style || {}}
      className={className || ""}
      onClick={() => (onClick ? onClick() : {})}
    >
      {children}
    </Paper>
  );
}

export default Backdrop;
