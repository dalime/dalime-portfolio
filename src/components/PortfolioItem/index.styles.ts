import styled from "styled-components";

export const Img = styled.img`
  width: 300px;
  height: 400px;
  object-fit: contain;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;