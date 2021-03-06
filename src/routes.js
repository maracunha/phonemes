import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import Phonemes from './pages/Phonemes';
import Success from './pages/Success';
import Exercises from './pages/Exercises'

function Routes() {

  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/phonemes" component={Phonemes} />
      <Route path="/success" component={Success} />
      <Route path="/exercises" component={Exercises} />
    </BrowserRouter>
  );
}

export default Routes;
