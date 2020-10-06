import React from 'react';
import { Link } from 'react-router-dom';

import Animation from '../../components/Animation';
import unicorn from '../../assets/images/icons/unicorn.svg'

import './styles.css';

function Success() {
  return (
    <div id="success">
        <Link className="button-back" to="/">
          Voltar
        </Link>
      <img src={unicorn} alt="unicorn"/>
      {/* <Animation /> */}
    </div>
  );
}

export default Success;
