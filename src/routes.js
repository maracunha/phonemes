import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import Phonemes from './pages/Phonemes';
import Success from './pages/Success';

function Routes() {

  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/phonemes" render={props => <Phonemes phonemeImage={'image1'} />} />
      <Route path="/phonemes2" render={props => <Phonemes phonemeImage={'image2'} />} />
      <Route path="/success" component={Success} />
    </BrowserRouter>
  );
}

export default Routes;
