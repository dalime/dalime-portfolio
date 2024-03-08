export interface BaseProps {
  deviceHeight: number;
}
export interface LastStepProps extends BaseProps {
  isMobile: boolean;
}

export interface StepProps extends LastStepProps {
  phoneDimensions: {
    width: number;
    height: number;
  };
}
