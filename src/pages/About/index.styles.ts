import styled from "styled-components";

export const TeamMemberImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
