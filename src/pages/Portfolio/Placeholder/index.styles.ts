import styled from 'styled-components';


export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const Keyboard = styled.div`
  height: 50px;
  width: 100%;
  background: #000000;
  border-radius: 8px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  background: rgba(125, 125, 125, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(90px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
`;
