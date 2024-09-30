import styled from "styled-components";

export const TeamMemberImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;
