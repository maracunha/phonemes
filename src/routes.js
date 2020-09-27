import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Phonemes from './pages/Phonemes';
import Success from './pages/Success';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Phonemes} />
      <Route path="/success" component={Success} />
    </BrowserRouter>
  );
}

export default Routes;
