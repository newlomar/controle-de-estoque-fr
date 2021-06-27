import React, { Component, Fragment } from 'react'

class FormsDelecao extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            estoque: ''
        };
    };

    mudancaID = (event) => {
        this.setState({
            id: event.target.value
        });
    };

    mudancaEstoque = (event) => {
        this.setState({
            estoque: event.target.value
        });
    };

    onSubmitFormProduto = async (event) => {
        event.preventDefault();
        try {
            const { id } = this.state;

            const response = await fetch(
                `http://localhost:5000/deletar_produto/${id}`,
                {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'},
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
            const { estoque } = this.state;

            const response = await fetch(
                `http://localhost:5000/deletar_estoque/${estoque}`,
                {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'},
                }
            );
            
            window.location = '/';
        }
        catch (err) {
            console.error(err.message);
        }
    };

    render() {

        const { id, estoque } = this.state;

        return (
            <Fragment>
                <div>
                    <h2>Deletar Produto</h2>
                    <form onSubmit={this.onSubmitFormProduto}>
                        <div>
                                <label>ID do produto</label>
                                <input 
                                type="number"
                                value={id}
                                onChange={this.mudancaID}
                            />
                        </div>
                        <button>Deletar produto</button>
                    </form>
                </div>
                <div>
                    <h2>Deletar Estoque</h2>
                    <form onSubmit={this.onSubmitFormEstoque}>
                        <div>
                            <label>Nome do estoque</label>
                            <input 
                                type="text"
                                value={estoque}
                                onChange={this.mudancaEstoque}
                            />
                        </div>
                        <button>Deletar estoque</button>
                    </form>
                </div>
            </Fragment>
        );
    };
};

export default FormsDelecao;