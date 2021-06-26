CREATE DATABASE controle_de_estoque;

CREATE TABLE produtos(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    quantidade integer,
    estoque VARCHAR(255)
);