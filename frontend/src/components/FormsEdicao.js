import React, { Component, Fragment } from 'react';

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

        return (
            <Fragment>
                <div>
                    <h2>Edição de produto</h2>
                    <form onSubmit={this.onSubmitFormProduto}>
                        <div>
                            <label>ID do produto</label>
                            <input 
                                type="number" 
                                value={id}
                                onChange={this.mudancaID}
                            />
                        </div>
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
                        <button>Atualizar</button>
                    </form>
                </div>
                <div>
                    <h2>Edição de estoque</h2>
                    <form onSubmit={this.onSubmitFormEstoque}>
                        <div>
                            <label>Nome do estoque</label>
                            <input
                                type="text"
                                value={atualizacaoEstoque}
                                onChange={this.mudancaAtualizacaoEstoque}
                            />
                        </div>
                        <div>
                            <label>Quantidade</label>
                            <input 
                                type="number"
                                value={quantidadeEstoque}
                                onChange={this.mudancaQuantidadeEstoque}
                            />
                        </div>
                        <button>Editar estoque</button>
                    </form>
                </div>
            </Fragment>
        );
    }
};

export default FormsEdicao;