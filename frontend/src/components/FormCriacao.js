import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    accordion: {
        marginTop: 50
    },
    btn: {
        marginTop: 10,
        backgroundColor: '#88BC23',
        color: 'white',
        '&:hover': {
            backgroundColor: 'white',
            color: '#88BC23'
        }
    }
});

class InputCriacao extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            quantidade: 0,
            estoque: ''
        };
    };

    mudancaNome = (event) => {
        this.setState({
            nome: event.target.value
        });
    };

    mudancaQuantidade = (event) => {
        this.setState({
            quantidade: event.target.value
        });
    };

    mudancaEstoque = (event) => {
        this.setState({
            estoque: event.target.value
        });
    };

    onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { 
                nome: this.state.nome,
                quantidade: this.state.quantidade,
                estoque: this.state.estoque
            };

            const response = await fetch(
                'http://localhost:5000/novo_produto',
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(body)
                }
            );
            
            window.location = '/';
        }
        catch (err) {
            console.error(err.message);
        }
    };

    render() {

        const { nome, quantidade, estoque } = this.state;
        const { classes } = this.props;

        return (
            <Fragment>
                <Container>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography align="left" component="h2" variant="h5" gutterBottom>
                                Inserção de novo produto
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <form onSubmit={this.onSubmitForm}>
                                <TextField
                                    className={classes.input}
                                    id="filled-basic" 
                                    label="Nome" 
                                    variant="filled" 
                                    type="text" 
                                    value={nome}
                                    onChange={this.mudancaNome}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    id="filled-basic" 
                                    label="Quantidade" 
                                    variant="filled" 
                                    type="number"
                                    value={quantidade}
                                    onChange={this.mudancaQuantidade}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    id="filled-basic"
                                    label="Nome do estoque - (não utilizar espaço)"
                                    variant="filled"
                                    type="text"
                                    value={estoque}
                                    onChange={this.mudancaEstoque}
                                    fullWidth
                                    required
                                />
                                <Button 
                                    type="submit"
                                    endIcon={<AddIcon />}
                                    color="primary"
                                    variant="contained"
                                    className={classes.btn}
                                >
                                    Adicionar
                                </Button>
                            </form>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Fragment>
        );
    }
};

export default withStyles(styles)(InputCriacao);