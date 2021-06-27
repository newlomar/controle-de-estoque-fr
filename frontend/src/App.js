import React, { Fragment } from 'react';
import './App.css';

//components

import FormCriacao from './components/FormCriacao';
import FormsEdicao from './components/FormsEdicao';
import FormsDelecao from './components/FormsDelecao';
import ListaProdutos from './components/ListaProdutos';

function App() {
  return (
    <Fragment>
      <FormCriacao />
      <FormsEdicao />
      <FormsDelecao />
      <ListaProdutos />
    </Fragment>
  );
};

export default App;
