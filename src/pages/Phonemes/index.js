import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import phonemeS from '../../assets/images/phoneme-S.png';
import backward from '../../assets/images/icons/caret-left-solid.svg';
import forward from '../../assets/images/icons/caret-forward-solid.svg';
import unicorn from '../../assets/images/icons/unicorn.svg'
import './style.css';

function Phonemes() {
const [positions, setPositions] = useState([0]);
const [isHidden, setIsHidden] = useState(false)

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

const randomPositionIndex = () => {
  const number = Math.floor(Math.random() * matrix.length);
  if (positions.indexOf(number) !== -1) return randomPositionIndex();
  return number
};

const handleNext = () => {
  setPositions([...positions, randomPositionIndex()]);
  setIsHidden(false)
};

const handlePrevious = () => {
  setPositions(positions.slice(0, positions.length -1));
};

useEffect(() => {
  document.getElementsByClassName('image')[0].style.left = `${matrix[positions[positions.length -1]][1]}px`;
  document.getElementsByClassName('image')[0].style.top = `${matrix[positions[positions.length -1]][0]}px`;
}, [matrix, positions]);

const showUnicron = () => {
  if (positions.length %2 === 0) return true
  return false
}

// console.log('ishidden', isHidden)
console.log('showUnicron', showUnicron)

  return (
    <div id="phonemes">
      { positions.length === 35 && <Redirect to="/success" /> }
      <div id="page-phonemes-content" className="container">
        <h1>Fonema /s/ <span role="img" aria-label="coração">❤️</span></h1>
        <div className="viewport-content">
          <div className="viewport">
            <img className="image" src={phonemeS} alt="phonemes-S"/>
          </div>
          {showUnicron() &&
            <div className="viewport unicorn" onClick={() => setIsHidden(!isHidden)}>
              <img src={unicorn} alt="unicornio" style={{width: '100%', display: isHidden ? 'none' : null}}/>
            </div>
          }
        </div>
        <div className="buttons-container">
          <button className="backward" disabled={positions.length === 1} onClick={handlePrevious}>
            <img src={backward} alt="anterior"/>
          </button>
          <button className="forward" disabled={positions === matrix.length} onClick={handleNext}>
            <img src={forward} alt="próximo"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Phonemes;
