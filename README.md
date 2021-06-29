# Aplicação de controle de estoque

Aplicação criada com intuito de ser um controle de estoque. Nesse repositório estão todos


## Requisitos e como fazer a aplicação funcionar localmente

- Você precisará ter o postgreSQL instalado em sua máquina.

- Você precisará criar o db e a tabela que estão especificados em backend/database.sql, para ter o banco e a tabela utilizados na aplicação em sua máquina.

- Para que a conexão com o banco funcione propriamente, você precisará editar o arquivo backend/db.js e inserir os dados da sua conta de acesso local do postgres. No meu caso, eu utilizei o acesso com user "postgres" e com a senha que utilizo localmente.

- Após isso, para utilizar a aplicação você precisará ter o node/npm instalado em sua máquina.

- Com o node instalado, entre nas pastas: backend e frontend e execute o comando "npm install" para instalar as dependências do projeto.

- Por fim, é só acessar o http://localhost:3000/ e você terá acesso ao front da aplicação, já conectado com o back na que estará rodando porta 5000.