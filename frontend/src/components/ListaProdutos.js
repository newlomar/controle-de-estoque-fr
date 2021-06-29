import React, { Fragment, Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    accordion: {
        marginTop: 50
    },
    searchTwo: {
        marginLeft: 20
    }
});

class ListaProdutos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            produtos: [],
            caixaDePesquisa: '',
            caixaDePesquisaEstoque: ''
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

    mudancaCaixaPesquisaEstoque = (event) => {
        this.setState({
            caixaDePesquisaEstoque: event.target.value
        });
    };

    componentDidMount() {
        this.buscarProdutos();
    };

    render() {
    
        const { classes } = this.props;

        const { produtos, caixaDePesquisa, caixaDePesquisaEstoque } = this.state;

        const produtosFiltrados = produtos.filter((produto) => {
            return  (
                (produto.nome.toLowerCase().includes(caixaDePesquisa.toLocaleLowerCase()))
                &&
                (produto.estoque.toLowerCase().includes(caixaDePesquisaEstoque.toLocaleLowerCase()))
            )
        });

        return (
            <Fragment>
                <Container>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography align="center" component="h2" variant="h4" gutterBottom>
                            Lista de Produtos
                        </Typography>
                        </AccordionSummary>
                        <Container>
                            <TextField
                                id="standard-basic" 
                                label="Filtrar por produto"
                                color="secondary"
                                type="text"
                                value={caixaDePesquisa}
                                onChange={this.mudancaCaixaPesquisa}
                            />
                            <TextField
                                className={classes.searchTwo}
                                id="standard-basic" 
                                label="Filtrar por estoque"
                                color="secondary"
                                type="text"
                                value={caixaDePesquisaEstoque}
                                onChange={this.mudancaCaixaPesquisaEstoque}
                            />
                        </Container>
                        <AccordionDetails>
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
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Fragment>
        );
    };
};

export default withStyles(styles)(ListaProdutos);