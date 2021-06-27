import React, { Component, Fragment } from 'react';

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
                <h2>Form Criação</h2>
                <form onSubmit={this.onSubmitForm}>
                    <div>
                        <label>Nome do Produto</label>
                        <input 
                            type="text" 
                            value={nome}
                            onChange={this.mudancaNome}
                        />
                    </div>
                    <div>
                        <label>Quantidade</label>
                        <input 
                            type="number"
                            value={quantidade}
                            onChange={this.mudancaQuantidade}
                        />
                    </div>
                    <div>
                        <label>Nome do estoque</label>
                        <input 
                            type="text"
                            value={estoque}
                            onChange={this.mudancaEstoque}
                        />
                    </div>
                    <button>Adicionar</button>
                </form>
            </Fragment>
        );
    }
};

export default InputCriacao;