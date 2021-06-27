import React, { Fragment, Component} from 'react';

class ListaProdutos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            produtos: [],
            caixaDePesquisa: ''
        };
    };

    buscarProdutos = async () => {
        try {
            const response = await fetch('http://localhost:5000/produtos');
            const jsonData = await response.json();

            this.setState({
                produtos: jsonData
            });
        }
        catch (err) {
            console.error(err);
        }
    };

    mudancaCaixaPesquisa = (event) => {
        this.setState({
            caixaDePesquisa: event.target.value
        });
    };

    componentDidMount() {
        this.buscarProdutos();
    };

    render() {

        const { produtos, caixaDePesquisa } = this.state;

        const produtosFiltrados = produtos.filter((produto) => {
            return  produto.nome.toLowerCase().includes(caixaDePesquisa.toLocaleLowerCase());
        });

        return (
            <Fragment>
                <h2>Lista de Produtos:</h2>
                <div>
                    <label>Filtrar produtos por nomes</label>
                    <input 
                        type="text"
                        value={caixaDePesquisa}
                        onChange={this.mudancaCaixaPesquisa}
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome do Produto</th>
                            <th>Quantidade</th>
                            <th>Nome do Estoque</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0000</td>
                            <td>Nome1</td>
                            <td>Quantidade1</td>
                            <td>Estoque1</td>
                        </tr>
                        {produtosFiltrados.map((produto) => (
                            <tr>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.quantidade}</td>
                                <td>{produto.estoque}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    };
};

export default ListaProdutos;