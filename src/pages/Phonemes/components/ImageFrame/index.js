import styled from '@emotion/styled';

const ImageFrame = styled.img`
  display: block;
  position: absolute;
  left: ${[props => props.left]}px;
  top: ${props => props.top}px;
`;

export default ImageFrame;
