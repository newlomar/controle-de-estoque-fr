import React, { Fragment } from 'react';
import './App.css';

//components
import FormCriacao from './components/FormCriacao';
import FormsEdicao from './components/FormsEdicao';
import FormsDelecao from './components/FormsDelecao';
import ListaProdutos from './components/ListaProdutos';

//material-ui
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
  return (
    <Fragment>
      <CssBaseline />
      <FormCriacao />
      <FormsEdicao />
      <FormsDelecao />
      <ListaProdutos />
    </Fragment>
  );
};

export default App;
