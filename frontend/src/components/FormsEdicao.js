import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SyncIcon from '@material-ui/icons/Sync';

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

class FormsEdicao extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            nome: '',
            quantidade: 0,
            estoque: '',
            atualizacaoEstoque: '',
            quantidadeEstoque: 0
        };
    };

    mudancaID = (event) => {
        this.setState({
            id: event.target.value
        });
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

    mudancaAtualizacaoEstoque = (event) => {
        this.setState({
            atualizacaoEstoque: event.target.value
        });
    };

    mudancaQuantidadeEstoque = (event) => {
        this.setState({
            quantidadeEstoque: event.target.value
        });
    };

    onSubmitFormProduto = async (event) => {
        event.preventDefault();
        try {
            const body = {
                nome: this.state.nome,
                quantidade: this.state.quantidade,
                estoque: this.state.estoque
            };

            const id = this.state.id;

            const response = await fetch(
                `http://localhost:5000/editar_produto/${id}`,
                {
                    method: 'PUT',
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

    onSubmitFormEstoque = async (event) => {
        event.preventDefault();

        try {
            const { atualizacaoEstoque, quantidadeEstoque } = this.state;

            console.log(atualizacaoEstoque, quantidadeEstoque);

            const body = {
                quantidade: quantidadeEstoque
            }
            
            const response = await fetch(
                `http://localhost:5000/editar_estoque/${atualizacaoEstoque}`,
                {
                    method: 'PUT',
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

        const { id, nome, quantidade, estoque, atualizacaoEstoque, quantidadeEstoque } = this.state;
        const { classes } = this.props;

        return (
            <Fragment>
                <Container>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography align="left" component="h2" variant="h5" gutterBottom>
                                Edi????o de produto
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography align="left" component="h2" variant="h5" gutterBottom>
                                        Edi????o de unidade
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <form onSubmit={this.onSubmitFormProduto}>
                                        <TextField 
                                            id="filled-basic"
                                            label="ID do produto"
                                            variant="filled"
                                            type="number"
                                            value={id}
                                            onChange={this.mudancaID}
                                            fullWidth
                                            required
                                        />
                                        <TextField 
                                            id="filled-basic"
                                            label="Nome do Produto"
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
                                            label="Nome do estoque - (n??o utilizar espa??o)"
                                            variant="filled"
                                            type="text"
                                            value={estoque}
                                            onChange={this.mudancaEstoque}
                                            fullWidth
                                            required
                                        />
                                        <Button 
                                            type="submit"
                                            endIcon={<SyncIcon />}
                                            color="primary"
                                            variant="contained"
                                            className={classes.btn}
                                        >
                                            Atualizar
                                        </Button>
                                    </form>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography align="left" component="h2" variant="h5" gutterBottom>
                                        Edi????o de estoque
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <form onSubmit={this.onSubmitFormEstoque}>
                                        <TextField 
                                            id="filled-basic"
                                            label="Nome do estoque - (n??o utilizar espa??o)"
                                            variant="filled"
                                            type="text"
                                            value={atualizacaoEstoque}
                                            onChange={this.mudancaAtualizacaoEstoque}
                                            fullWidth
                                            required
                                        />
                                        <TextField 
                                            id="filled-basic"
                                            label="Quantidade para todos produtos"
                                            variant="filled"
                                            type="number"
                                            value={quantidadeEstoque}
                                            onChange={this.mudancaQuantidadeEstoque}
                                            fullWidth
                                            required
                                        />
                                        <Button 
                                            type="submit"
                                            endIcon={<SyncIcon />}
                                            color="primary"
                                            variant="contained"
                                            className={classes.btn}
                                        >
                                            Atualizar
                                        </Button>
                                    </form>
                                </AccordionDetails>
                            </Accordion>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Fragment>
        );
    }
};

export default withStyles(styles)(FormsEdicao);