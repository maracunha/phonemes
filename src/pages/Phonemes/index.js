import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import PhoneImage1 from '../../components/phonemesImages/PhonemeImage1'
import PhoneImage2 from '../../components/phonemesImages/PhonemeImage2'

import backward from '../../assets/images/icons/caret-left-solid.svg';
import forward from '../../assets/images/icons/caret-forward-solid.svg';
import './style.css';

function Phonemes({ phonemeImage }) {
const [positions, setPositions] = useState([0]);
const [matrixLength, setMatrixLength] = useState(null);
const [successPage, setSuccessPage] = useState(false)

const randomPositionIndex = () => {
  const number = Math.floor(Math.random() * matrixLength);
  if (positions.indexOf(number) !== -1) return randomPositionIndex();
  return number
};

const handleNext = () => {
  if ( positions.length === matrixLength ) return setSuccessPage(true)
  setPositions([...positions, randomPositionIndex()]);
};

const handlePrevious = () => {
  if (!lastPositionIndex) return null
  setPositions(positions.slice(0, positions.length -1));
};

const handlePhonemePage = (phonemeImage) => {
  switch (phonemeImage) {
    case 'image1':
      return <PhoneImage1 position={lastPositionIndex} onHandleMatrixLength={(value) => setMatrixLength(value)} />
    case 'image2':
      return <PhoneImage2 position={lastPositionIndex} onHandleMatrixLength={(value) => setMatrixLength(value)} />
    default:
      return <PhoneImage2 position={lastPositionIndex} onHandleMatrixLength={(value) => setMatrixLength(value)} />
  }
}

const lastPositionIndex = positions[positions.length -1]

  return (
    <div id="phonemes">
      { successPage && <Redirect to="/success" /> }
      <div id="page-phonemes-content" className="container">
        <h1>Fonema /s/ <span role="img" aria-label="coração">❤️</span></h1>
        <div className="viewport-content">
          {handlePhonemePage(phonemeImage)}
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
