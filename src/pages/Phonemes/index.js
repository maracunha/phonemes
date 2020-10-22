import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { randomPositionIndex, matrixLength, getLeftFromMatrix, getTopFromMatrix } from './services'

import ViewPort from './components/ViewPort';
import ImageFrame from './components/ImageFrame';

import img1 from '../../assets/images/image1.png'
import img2 from '../../assets/images/image2.png'
import backward from '../../assets/images/icons/caret-left-solid.svg';
import forward from '../../assets/images/icons/caret-forward-solid.svg';

import './style.css';

function Phonemes({ location }) {
const [positions, setPositions] = useState([0]);
const [successPage, setSuccessPage] = useState(false)

const image = location.state.image
const lastPositionIndex = positions[positions.length -1]

const left = getLeftFromMatrix(lastPositionIndex, image)
const top = getTopFromMatrix(lastPositionIndex, image)


const handleNext = () => {
  if ( positions.length === matrixLength(image) ) return setSuccessPage(true)
  setPositions([...positions, randomPositionIndex(positions, image)]);
};

const handlePrevious = () => {
  if (!lastPositionIndex) return null
  setPositions(positions.slice(0, positions.length -1));
};

  return (
    <div id="phonemes">
      { successPage && <Redirect to="/success" /> }
      <div id="page-phonemes-content" className="container">
        <h1>Fonema /s/ <span role="img" aria-label="coração">❤️</span></h1>
        <div className="viewport-content">
          <ViewPort 
            width={image === 'image1' ? '274' : '150'} 
            height={image === 'image1' ? '274' : '142'}
          >
            <ImageFrame left={left} top={top} src={image === 'image1' ? img1 : img2} />
          </ViewPort>
        </div>
        <div className="buttons-container">
          <button className="backward" onClick={handlePrevious}>
            <img src={backward} alt="anterior"/>
          </button>
          <button className="forward" onClick={handleNext}>
            <img src={forward} alt="próximo"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Phonemes;
