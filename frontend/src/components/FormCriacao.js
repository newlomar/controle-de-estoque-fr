import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

        return (
            <Fragment>
                <Typography align="left" component="h2" variant="h5" color="green" gutterBottom>Inserir novo produto</Typography>
                <Grid container direction="column" justify="center" alignItems="center">
                    <form onSubmit={this.onSubmitForm}>
                        <div>
                        <TextField 
                            id="filled-basic" 
                            label="Nome" 
                            variant="filled" 
                            type="text" 
                            value={nome}
                            onChange={this.mudancaNome}
                        />
                        </div>
                        <div>
                            <TextField
                                id="filled-basic" 
                                label="Quantidade" 
                                variant="filled" 
                                type="number"
                                value={quantidade}
                                onChange={this.mudancaQuantidade}
                            />
                        </div>
                        <div>
                            <TextField
                                id="filled-basic"
                                label="Estoque"
                                variant="filled"
                                type="text"
                                value={estoque}
                                onChange={this.mudancaEstoque}
                            />
                        </div>
                        <button>Adicionar</button>
                    </form>
                </Grid>
            </Fragment>
        );
    }
};

export default InputCriacao;