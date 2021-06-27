import React, { Fragment, Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// const styles = theme => ({
//     root: {
//         background: 'white',
//         color: 'black'
//     },
//     heading: {
//         textAlign: 'center'
//     }
// });

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
    
        const { classes } = this.props;

        const { produtos, caixaDePesquisa } = this.state;

        const produtosFiltrados = produtos.filter((produto) => {
            return  produto.nome.toLowerCase().includes(caixaDePesquisa.toLocaleLowerCase());
        });

        return (
            <Fragment>
                <Grid container lg={12} direction="column" justify="center" alignItems="center">
                    <Typography align="center" component="h2" variant="h4" color="success.main" gutterBottom>Lista de Produtos</Typography>
                    <TextField
                        id="standard-basic" 
                        label="Filtrar por nome"
                        color="secondary"
                        type="text"
                        value={caixaDePesquisa}
                        onChange={this.mudancaCaixaPesquisa}
                    />
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Nome do Produto</TableCell>
                                <TableCell>Quantidade</TableCell>
                                <TableCell>Nome do Estoque</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {produtosFiltrados.map((produto) => (
                                <TableRow>
                                    <TableCell>{produto.id}</TableCell>
                                    <TableCell>{produto.nome}</TableCell>
                                    <TableCell>{produto.quantidade}</TableCell>
                                    <TableCell>{produto.estoque}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Fragment>
        );
    };
};

export default ListaProdutos;