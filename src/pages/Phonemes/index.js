import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import phonemeS from '../../assets/images/phoneme-S.png';
import backIcon from '../../assets/images/icons/back.svg';
import './style.css';

function Phonemes() {
const [position, setPosition] = useState(0)

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
  [],
]

const handleNext = () => {
  if (position === matrix.length -1) return null
  
  setPosition(position + 1)

  //TODO dizer que chegou ao final da lista.
}

console.log({position, })
console.log('matrix[position]', matrix[position])
console.log('matrix.length', matrix.length)

const handlePrevious = () => {
  if (position >= 1) setPosition(position -1)
}

  return (
    <div id="phonemes">
      { position === matrix.length -1 && <Redirect to="/success" /> }
      <div id="page-phonemes-content" className="container">
        <h1>Fonema /s/ <span role="img" aria-label="coração">❤️</span></h1>
        <div className="viewport-content">
          <div className="viewport">
            <img style={{
              display: 'block',
              position: 'absolute',
              left: `${matrix[position][1]}px`,
              top: `${matrix[position][0]}px`,
            }} src={phonemeS} alt="phonemes-S"/>
          </div>
        </div>
        <div className="buttons-container">
          <button disabled={position === 0} onClick={handlePrevious}>
            <img src={backIcon} alt="anterior"/>
          </button>
          <button disabled={position === matrix.length} onClick={handleNext}>Próximo</button>
        </div>
      </div>
    </div>
  );
}

export default Phonemes;
