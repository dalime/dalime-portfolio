import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  margin-top: auto;
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
