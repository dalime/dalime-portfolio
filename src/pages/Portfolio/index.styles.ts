import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  background: rgba(125, 125, 125, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(90px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
`;

export const MobileWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ProjectPreview = styled.div`
  width: 50%;
  height: calc(100vh - 95px - 40px - 90.02px);
  border: none;
`;

export const MobileProjectPreview = styled(ProjectPreview)`
  width: 100%;
  height: calc(100vh - 76px - 65px - 46.5px);
`;

export const PreviewWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid #FFEB3B;
  border-radius: 8px;
  overflow: hidden;
`;

export const PreviewBackdrop = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
`;

export const PreviewActions = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 8px;
  overflow: hidden;
`;

interface MobilePreviewImgProps {
  heightLessThanWidth: boolean;
}

export const MobilePreviewImg = styled.img<MobilePreviewImgProps>`
  width: ${(props) => props.heightLessThanWidth ? "100%" : "auto"};
  height: ${(props) => props.heightLessThanWidth ? "auto" : "calc(100vh - 76px - 65px - 46.5px) !important"};
  object-fit: ${(props) => props.heightLessThanWidth ? "cover" : "contain"};
  max-width: "none";
  display: "block";
  margin-left: "auto";
  margin-right: "auto";
`;

export const ProjectsList = styled.div`
  height: calc(100vh - 95px - 40px - 90.02px);
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  overflow-y: auto;
`;

export const MobileProjectsList = styled(ProjectsList)`
  height: calc(100vh - 76px - 60px - 46.5px);
  width: 100%;
`;

export const ProjectDetailWrapper = styled.div`
  margin-top: 30px;
  text-align: left;
  padding: 20px;
  padding: 20px;
`;

export const MatrixBackdrop = styled.img`
  width: auto;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;
