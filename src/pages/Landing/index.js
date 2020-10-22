import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

function Landing() {

  return(
    <div id='landing'>
      <Link className="button" to='exercises'>
        EXERCÍCIOS
      </Link>
      <Link 
        className="button" 
        to={{
          pathname: "/phonemes",
          state: {
            image: 'image1',
          }
        }}
      >
        FIGURAS 1
      </Link>
      <Link className="button" 
        to={{
          pathname: "/phonemes",
          state: {
            image: 'image2',
          }
        }}
      >
        FIGURAS 2
      </Link>
    </div>
  );

}

export default Landing;
