import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

function Landing() {

  return(
    <div id='landing'>
      <Link className="button" to="phonemes">
        Fonemas /s/
      </Link>
      <Link className="button" to="phonemes">
        Fonemas /s/
      </Link>
    </div>
  );

}

export default Landing;
