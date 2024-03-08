import React, {
  useRef,
  useState,
  useEffect,
  CSSProperties,
  ReactNode,
} from "react";

// Components
import HeaderMenu from "../HeaderMenu";
import Footer from "../Footer";
import Background from "../Background";

// Styles
import { Div, Body } from "./index.styles";
import "./index.css";

interface Props {
  testId?: string;
  children?: ReactNode | ReactNode[];
  style?: CSSProperties;
}

function Page({ testId, children, style }: Props) {
  // Refs
  const triggerRef = useRef<HTMLDivElement | null>(null);

  // Component State
  const [opacity, setOpacity] = useState<number>(0);

  // Effects
  useEffect(() => {
    const handleScroll = () => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      if (rect.bottom <= 0) {
        // If the bottom of the trigger is at or above the top of the viewport, set full opacity
        setOpacity(1);
      } else {
        // If trigger is in the viewport, set transparent
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Div data-testid={testId || ""} style={style || {}}>
      <div className="scroll-trigger" ref={triggerRef}></div>
      <HeaderMenu opacity={opacity} />
      <Body>{children}</Body>
      <Footer />
      <Background />
    </Div>
  );
}

export default Page;
