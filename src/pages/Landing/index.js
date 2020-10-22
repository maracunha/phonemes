import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

function Landing() {

  return(
    <div id='landing'>
      <Link 
        className="button" 
        to={{
          pathname: "/phonemes",
          state: {
            image: 'image1',
          }
        }}
      >
        Fonemas /s/ 1
      </Link>
      <Link className="button" 
        to={{
          pathname: "/phonemes",
          state: {
            image: 'image2',
          }
        }}
      >
        Fonemas /s/ 2
      </Link>
    </div>
  );

}

export default Landing;
