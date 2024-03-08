import styled from "styled-components";
import { yellow } from "@mui/material/colors";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${yellow[300]};
  width: 50%;
  height: 50%;
  min-height: 500px;
  margin-left: 25%;
  padding: 20px;
  background: rgba(125, 125, 125, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(90px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 5%;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
