import React from 'react';
import styled from '@emotion/styled'

import image2 from '../../assets/images/image2.png'

function Image2({ position }) {

  const matrix = [
    [0, 0],
    [0, -149],
    [0, -598],
    [0, -748],
    [-141, -149],
    [-141, -298],
    [-141, -447],
    [-141, -598],
    [-141, -748],
    [-141, -897],
    [-281, 0],
    [-281, -298],
    [-281, -447],
    [-421, -298],
    [-421, -447],
    [-421, -897],
  ];

  const ViewPort = styled.div`
    overflow: hidden;
    position: absolute;
    border-radius: 2.4rem;
    width: 150px;
    height: 142px;
  `

  const Image = styled.img`
    display: block;
    position: absolute;
    left: ${matrix[position][1]}px;
    top: ${matrix[position][0]}px;
  `

return (
  <div  className="viewport-content">
    <ViewPort className="viewport">
      <Image className="image" src={image2} alt="imagens"/> 
    </ViewPort>
  </div>
  );
}

export default Image2;
