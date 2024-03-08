import React from "react";
import { animated, useSpring } from "@react-spring/web";

// Images
import SleekAppLogo from "../../../assets/images/sleekapp-logo.png";

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
      src={SleekAppLogo}
      alt="Sleek App"
      width={mobile ? 200 : 300}
      style={{
        width: mobile ? 200 : 300,
        height: "auto",
        transform: y.to((value) => `translate3d(0,${value}px,0)`),
      }}
    />
  );
}

export default HeroLogo;
