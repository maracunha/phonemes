import React from 'react';
import { Link } from 'react-router-dom';

import Animation from '../../components/Animation';

import './styles.css';

function Success() {
  return (
    <div id="success">
        <Link className="button-back" to="/">
          Voltar
        </Link>
      <Animation />
    </div>
  );
}

export default Success;
