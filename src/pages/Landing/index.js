import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

function Landing() {

  return(
    <div id='landing'>
      <Link className="button" to="phonemes">
        Fonemas /s/ 1
      </Link>
      <Link className="button" to="phonemes2">
        Fonemas /s/ 2
      </Link>
    </div>
  );

}

export default Landing;
