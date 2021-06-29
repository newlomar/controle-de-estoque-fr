import React, { Component, Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    accordion: {
        marginTop: 50
    },
    btn: {
        marginTop: 10,
        backgroundColor: '#f48fb1',
        color: 'white',
        '&:hover': {
            backgroundColor: 'white',
            color: '#f48fb1'
        }
    }
});

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
        const { classes } = this.props;

        return (
            <Fragment>
                <Container>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography align="left" component="h2" variant="h5" gutterBottom>
                                Deleção de produto
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography align="left" component="h2" variant="h5" gutterBottom>
                                        Deleção de unidade
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
                                        <Button 
                                            type="submit"
                                            endIcon={<DeleteIcon/>}
                                            color="primary"
                                            variant="contained"
                                            className={classes.btn}
                                        >
                                            Deletar Produto
                                        </Button>
                                    </form>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography align="left" component="h2" variant="h5" gutterBottom>
                                        Deleção de estoque
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <form onSubmit={this.onSubmitFormEstoque}>
                                    <label>Nome do estoque</label>
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
                                            endIcon={<DeleteIcon/>}
                                            color="primary"
                                            variant="contained"
                                            className={classes.btn}
                                        >
                                            Deletar estoque
                                        </Button>
                                    </form>
                                </AccordionDetails>
                            </Accordion>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Fragment>
        );
    };
};

export default withStyles(styles)(FormsDelecao);