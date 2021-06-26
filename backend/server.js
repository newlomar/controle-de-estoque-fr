const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middlewares
app.use(cors());
app.use(express.json());

//ROUTES

//criar um produto
app.post('/novo_produto', async (req, res) => {
    try {
        const { nome, quantidade, estoque } = req.body;
        const novoProduto = await pool.query(
            'INSERT INTO produtos (nome, quantidade, estoque) VALUES ($1, $2, $3) RETURNING *', 
            [nome, quantidade, estoque]
        );
        
        res.json(novoProduto.rows[0]);     
    }
    catch (err) {
        console.log(err.message);
    }
});

//buscar todos produtos
app.get('/produtos', async(req, res) => {
    try {
        const todosProdutos = await pool.query(
            'SELECT * FROM produtos'
        );

        res.json(todosProdutos.rows);
    }
    catch(err) {
        console.error(err.message);
    }
});

//buscar um produto
app.get('/produtos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await pool.query(
            'SELECT * FROM produtos WHERE id = $1', 
            [id]
        );

        res.json(produto.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
});

//buscar todos produtos de um estoque
app.get('/estoques/:estoque', async (req, res) => {
    try {
        const { estoque } = req.params;

        const produtos = await pool.query(
            'SELECT * FROM produtos WHERE estoque = $1', 
            [estoque]
        );

        res.json(produtos.rows);
    }
    catch (err) {
        console.error(err.message);
    }
});

//atualizar um produto
app.put('/editar_produto/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, quantidade, estoque } = req.body;

        const editarProduto = await pool.query(
            'UPDATE produtos SET (nome, quantidade, estoque) = ($1, $2, $3) WHERE id = $4',
            [nome, quantidade, estoque, id]
        );

        res.json('Produto atualizado');

    } catch (err) {
        console.error(err.message);
    }
});

//atualizar quantidade de todos itens de um estoque
app.put('/editar_estoque/:estoque', async (req, res) => {
    try {
        const { estoque } = req.params;
        const { quantidade } = req.body;

        const editarEstoque = await pool.query(
            'UPDATE produtos SET quantidade = $1 WHERE estoque = $2',
            [quantidade, estoque]
        );

        res.json('Estoque atualizado');
    }
    catch (err) {
        console.error(err.message);
    }
});

//deletar um produto
app.delete('/deletar_produto/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletarProduto = await pool.query(
            'DELETE FROM produtos WHERE id = $1',
            [id]
        );

        res.json('Produto excluído');
    }
    catch (err) {
        console.error(err.message);
    }
});

//deletar um estoque
app.delete('/deletar_estoque/:estoque', async (req, res) => {
    try {
        const { estoque } = req.params;

        const deletarEstoque = await pool.query(
            'DELETE FROM produtos WHERE estoque = $1',
            [estoque]
        );

        res.json('Estoque deletado');
    }
    catch (err) {
        console.error(err.message);
    }
});


app.listen(5000, () => {
    console.log('Server has started on port 5000');
});