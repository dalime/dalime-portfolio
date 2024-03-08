import styled from 'styled-components';
import { grey } from '@mui/material/colors';

export const Rows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TechWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  margin-bottom: 16px;
  height: 60px;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
  }
`;

export const TechImg = styled.img`
  width: auto;
  height: 30px;
  object-fit: contain;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 10px;
    height: 30px !important;
  }
`;

export const TechText = styled.p`
  color: ${grey[300]};
  font-size: 14px;
`;
