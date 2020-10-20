import React from 'react';
import styled from '@emotion/styled'

import image1 from '../../assets/images/image1.png'

function PhonemeImage1({ position, onHandleMatrixLength }) {

  const matrix = [
    [0, 0],
    [0, -279],
    [0, -563],
    [0, -842],
    [0, -1119],
    [-276, 0],
    [-276, -276],
    [-276, -563],
    [-276, -842],
    [-276, -1119],
    [-551, 0],
    [-551, -279],
    [-551, -563],
    [-551, -842],
    [-551, -1119],
    [-827, 0],
    [-827, -279],
    [-827, -563],
    [-827, -842],
    [-827, -1119],
    [-1103, 0],
    [-1103, -279],
    [-1103, -563],
    [-1103, -842],
    [-1103, -1119],
    [-1379, 0],
    [-1379, -279],
    [-1379, -563],
    [-1379, -842],
    [-1379, -1119],
    [-1654, 0],
    [-1654, -279],
    [-1654, -563],
    [-1654, -842],
    [-1654, -1119],
  ];

  onHandleMatrixLength(matrix.length)

  const ViewPort = styled.div`
    overflow: hidden;
    position: absolute;
    border-radius: 2.4rem;
    width: 274px;
    height: 274px;
  `

  const StyledImage = styled.img`
    display: block;
    position: absolute;
    left: ${[props => props.left]}px;
    top: ${props => props.top}px;
  `

  const left = matrix[position][1];
  const top = matrix[position][0];

return (
  <div  className="viewport-content">
    <ViewPort className="viewport">
      <StyledImage left={left} top={top} className="image" src={image1} alt="imagens"/> 
    </ViewPort>
  </div>
  );
}

export default PhonemeImage1;
