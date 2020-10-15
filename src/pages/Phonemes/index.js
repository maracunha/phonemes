import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import PhoneImage1 from '../../components/phonemesImages/PhonemeImage1'
import PhoneImage2 from '../../components/phonemesImages/PhonemeImage2'

import backward from '../../assets/images/icons/caret-left-solid.svg';
import forward from '../../assets/images/icons/caret-forward-solid.svg';

import './style.css';

function Phonemes(props) {
const [positions, setPositions] = useState(0);

const matrixLength = 23
const matrixLength2 = 23

// const randomPositionIndex = () => {
//   const number = Math.floor(Math.random() * matrix.length);
//   if (positions.indexOf(number) !== -1) return randomPositionIndex();
//   return number
// };

const handleNext = () => {
  setPositions(positions + 1)
  // setPositions([...positions, randomPositionIndex()]);
  // setIsHidden(false)
};

const handlePrevious = () => {
  setPositions(positions - 1)
  // setPositions(positions.slice(0, positions.length -1));
};
  return (
    <div id="phonemes">
      { positions.length === 35 && <Redirect to="/success" /> }
      <div id="page-phonemes-content" className="container">
        <h1>Fonema /s/ <span role="img" aria-label="coração">❤️</span></h1>
        <div className="viewport-content">
          <PhoneImage2 position={positions} />
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
