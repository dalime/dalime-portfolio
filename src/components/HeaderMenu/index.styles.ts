import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Wrapper = styled(FlexRow)`
  position: sticky;
  top: 0;
  left: 0;
  height: fit-content;
  color: #ffffff;
  z-index: 2;
  padding: 10px 20px;
`;

export const RightSide = styled(FlexRow)`
  justify-content: flex-end;
`;

export const LeftSide = styled(FlexRow)`
  justify-content: flex-start;
`;

export const LogoImg = styled.img`
  width: 75px;
  height: auto;
`;