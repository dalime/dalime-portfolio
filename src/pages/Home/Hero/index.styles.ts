import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
`;

export const HeroWrapper = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: fit-content;
  padding: 5%;
`;

export const HeroLeft = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(100vw - 10% - 500px);
  height: fit-content;
  text-align: left;
`;

export const MobileHeroWrapper = styled(HeroWrapper)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10%;
  padding-top: 5%;
`;

export const MobileHeroTextWrapper = styled(MobileHeroWrapper)`
  align-items: center;
`;
