import React, { Fragment } from 'react';
import './App.css';

//components
import FormCriacao from './components/FormCriacao';
import FormsEdicao from './components/FormsEdicao';
import FormsDelecao from './components/FormsDelecao';
import ListaProdutos from './components/ListaProdutos';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

//material-ui
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles({
  nav: {
    background: 'white',
    color: '#88BC23'
  }
});

function App() {

  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <AppBar className={classes.nav} position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Frexco - Controle de Estoque
          </Typography>
        </Toolbar>
      </AppBar>
      <FormCriacao />
      <FormsEdicao />
      <FormsDelecao />
      <ListaProdutos />
    </Fragment>
  );
};

export default App;
