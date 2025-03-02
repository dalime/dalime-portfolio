import React from "react";
import { animated, useSpring } from "@react-spring/web";

// Images
import DannyLimLogo from "../../../assets/images/dannylim.png";

interface Props {
  mobile?: boolean;
}

function HeroLogo({ mobile }: Props) {
  const [pulse, setPulse] = React.useState(false);

  const { y } = useSpring({
    from: { y: 0 },
    to: { y: pulse ? 0 : mobile ? 5 : 10 },
    onRest: () => setPulse(!pulse),
    config: {
      tension: mobile ? 5 : 10,
      friction: 0,
    },
  });

  return (
    <animated.img
      src={DannyLimLogo}
      alt="Danny Lim"
      width={mobile ? 240 : 400}
      style={{
        width: mobile ? 240 : 400,
        height: "auto",
        transform: y.to((value) => `translate3d(0,${value}px,0)`),
        borderRadius: '50%',
        border: '1px solid #64b5f6'
      }}
    />
  );
}

export default HeroLogo;
