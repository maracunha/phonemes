import React from 'react';
import { Link } from 'react-router-dom';

import unicorn from '../../assets/images/icons/unicorn-happy.svg'

import './styles.css';

function Success() {
  return (
    <div id="success">
        <Link className="button-back" to="/">
          Voltar
        </Link>
      <img src={unicorn} alt="unicorn"/>
    </div>
  );
}

export default Success;
