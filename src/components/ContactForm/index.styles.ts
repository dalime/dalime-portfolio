import styled from "styled-components";
import { yellow } from "@mui/material/colors";

export const Form = styled.form`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  @media (max-width: 500px) {
    padding: 20px 0;
  }
`;

export const Separator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-left: 25%;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 75%;
    margin-left: 12.5%;
  }
`;

export const Line = styled.hr`
  width: 300px;
  border: 1px solid ${yellow[500]};
`;

export const LogoImg = styled.img`
  width: 40px;
  height: auto;
  object-fit: contain;
  margin-left: 20px;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
