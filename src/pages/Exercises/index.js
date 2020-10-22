import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import full from '../../assets/images/sheets/sheet1/full.png';
import horse from '../../assets/images/sheets/sheet1/horse.png';
import tongueAside from '../../assets/images/sheets/sheet1/tongueAside.png';

import snake from '../../assets/images/sheets/sheet2/snake.png';
import tongue2 from '../../assets/images/sheets/sheet2/tongue2.png';
import tongue5 from '../../assets/images/sheets/sheet2/tongue5.png';

import tongue1 from '../../assets/images/sheets/sheet3/tongue1.png';
import tongue2_1 from '../../assets/images/sheets/sheet3/tongue2.png';
import tongue3 from '../../assets/images/sheets/sheet3/tongue3.png';

import bike from '../../assets/images/sheets/sheet4/bike.png';
import biteLip from '../../assets/images/sheets/sheet4/biteLip.png';
import water from '../../assets/images/sheets/sheet4/water.png';

import backward from '../../assets/images/icons/caret-left-solid.svg';
import forward from '../../assets/images/icons/caret-forward-solid.svg';

function Exercise() {
  const [index, setIndex] = useState(0)

  const exercises = [
    full,
    horse,
    tongueAside,
    snake,
    tongue2,
    tongue5,
    tongue1,
    tongue2_1,
    tongue3,
    bike,
    biteLip,
    water,
  ]

  const text = [
    'ENCHER DE AR 2 MINUTOS',
    'SOM CAVALINHO 50X',
    'EMPURRAR LINGUA 20X',
    'TREINAR: SSSA, SSSE, SSSI, SSSO, SSSU',
    'LINGUA NO CÉU DA BOCA',
    'BIQUINHO DIREITO E ESQUERDA',
    'GIRAR LÍNGUA 10X DIREITA 10X ESQUERDA',
    'VARRER O CÉU DA BOCA 30X',
    'DIREITA ESQUERDA FORA DA BOCA',
    'SOM DA MOTO',
    'MORDER LÁBIOS 1 MINUTO',
    'BEBER ÁGUA'
  ]

  const handleNext = () => {
    setIndex(index + 1)
  };
  
  const handlePrevious = () => {
    if (index < 1) return 
    setIndex(index - 1)
  };

  return (
    <div id="phonemes">
      { exercises.length === index && <Redirect to="/success" /> }
      <div id="page-phonemes-content" className="container">
        <h1>{text[index]}</h1>
        <div className="viewport-content">
          <img src={exercises[index]} alt="full"/>
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

export default Exercise;
