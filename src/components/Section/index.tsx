import React, { CSSProperties, ReactNode } from "react";

import { Wrapper } from "./index.styles";

interface Props {
  padding?: number;
  style?: CSSProperties;
  children?: ReactNode | ReactNode[];
}

function Section({ padding, style, children }: Props) {
  const finalStyle: CSSProperties = style
    ? padding
      ? { ...style, padding }
      : style
    : {};

  return (
    <Wrapper data-testid="section-component" style={finalStyle}>
      {children}
    </Wrapper>
  );
}

export default Section;
