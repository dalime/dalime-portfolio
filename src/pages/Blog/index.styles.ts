import styled from "styled-components";

export const PreviewsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  margin-left: 25%;
  margin-top: 30px;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    width: 80%;
    margin-left: 10%;
  }
`;

export const PreviewWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 8px;
  box-shadow: rgba(255, 241, 118, 0.2) 0px 8px 24px;
`;

interface ErrorWrapperProps {
  mobile: boolean;
}

export const ErrorWrapper = styled.div<ErrorWrapperProps>`
  width: ${(props) => props.mobile ? "90%" : "300px"};
  margin-left: ${(props) => props.mobile ? "5%" : "calc(50% - 150px)"};
  margin-top: 30px;
`;

export const AuthorImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  @media (max-width: 400px) {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`;
