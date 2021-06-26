const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'LocalPostAdmin@#123',
    host: 'localhost',
    port: 5432,
    database: 'controle_de_estoque'
});

module.exports = pool;