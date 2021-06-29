# Aplicação de controle de estoque

Aplicação criada com intuito de ser um controle de estoque. Nesse repositório estão todos arquivos da aplicação


## Requisitos e como fazer a aplicação funcionar localmente

- Você precisará ter o postgreSQL instalado em sua máquina.

- Você precisará criar o database e a tabela que estão especificados em backend/database.sql, para ter o banco e a tabela utilizados na aplicação em sua máquina. (Rode as 2 Querys separadamente antes de começar a aplicação).

- Para que a conexão com o banco funcione corretamente, você precisará editar o arquivo backend/db.js e inserir os dados da sua conta de acesso local do postgres. No meu caso, eu utilizei o acesso com user "postgres" (que é um admin default do postgreSQL e, por isso, foi mantido) e com a senha que utilizo localmente (eu coloquei a senha branco antes da subida final da aplicação, então é fundalmental preencher com os dados de acesso ao SGBD da sua máquina).

- Após isso, para utilizar a aplicação você precisará ter o node/npm instalado em sua máquina.

- Com o node instalado, entre nas pastas: backend e frontend e execute o comando ```npm install``` para instalar as dependências do projeto.

- Com as dependências instaladas, separe um terminal para rodar o backend e outro para rodar o frontend. No terminal de backend deve-se utilizar o comando: ```node server.js``` para iniciar o servidor, e no terminal de frontend o comando: ```npm start``` deverá ser utilizado para iniciar a aplicação frontend em React. 

- Por fim, é só acessar o http://localhost:3000/ e você terá acesso ao front da aplicação, já conectado com o back na que estará rodando porta 5000.


# Lista de endpoints, suas funções e como utilizá-los

- http://localhost:5000/novo_produto -> Esse endpoint é utilizado para a criação de um novo produto. Deve-se enviar uma requisição utilizando o método POST em formato JSON. Segue exemplo com os campos necessários: 
{
    "nome": "Nome de teste",
    "quantidade": 12,
    "estoque": "teste"
}


- http://localhost:5000/produtos -> Endpoint utilizado para receber todos produtos. Deve-se utilizar uma requisição do tipo GET e não é necessário enviar nada no corpo da requisição.


- http://localhost:5000/produtos/:id -> Endpoint utilizado para buscar um produto específico. Deve-se enviar o ID desse produto no final do endpoint que será lido pelo sistema via req.params. Deve-se utilizar uma requisição do tipo GET. Exemplo de busca:  http://localhost:5000/produtos/5


- http://localhost:5000/estoques/:estoque -> Endpoint utilizado para buscar todos produtos de um estoque específico. Deve-se passar o nome do estoque no endpoint e será lido pelo sistema via req.params. Deve-se utilizar uma requisição do tipo GET. Exemplo de busca: http://localhost:5000/estoques/nomeDoEstoque


- http://localhost:5000/editar_produto/:id -> Endpoint utilizado para editar as informações de um produto. Deve-se passar o ID do produto ao final do endpoint, utilizando uma requisição do tipo PUT e enviar no corpo da requisição um objeto do tipo JSON. Segue exemplo com os campos necessários:

{
    "nome": "produto 4",
    "quantidade": 4,
    "estoque": "estoque-pra-deletar"
}


- http://localhost:5000/editar_estoque/:estoque -> Endpoint utilizado para atualizar a quantidade de todos itens de um mesmo estoque. Deve-se utilizar uma requisição do tipo PUT, informando o nome do estoque ao final do endpoint. No corpo da requisição deve-se enviar um objeto do tipo JSON. Segue um exemplo com o campo necessário:

{
    "quantidade": 0
}


- http://localhost:5000/deletar_produto/:id -> Endpoint utilziado para excluir um produto. Deve-se utilizar o método DELETE e não é necessário enviar nenhuma informação no corpo da requisição. Deve-se preencher o ID do produto que será deletado no final do enpoint.


- http://localhost:5000/deletar_estoque/:estoque -> Endpoint utilizado para excluir um estoque. Deve-se utilizar o método DELETE e não é necessário enviar nenhuma informação no corpo da requisição. Deve-se preencher o nome do estoque que será deletado no final do endpoint.


# Algumas considerações do autor sobre o projeto criado

### Abaixo vou listar algumas das minhas considerações sobre o projeto. Elas não ter ordem específica e serão utilizadas parar que eu possa destacar os pontos que tenho noção de que não estão funcionando como deveriam e pretendo melhorá-los como forma de aprendizado.

- A utilização da função: ```window.location = '/'``` nas funções de criação, edição e deleção no frontend é totalmente "incorreta" e vai contra um dos princípios básicos do React. Eu apenas utilizei essa forma de atualização pois não tive tempo no fim para fazer a trasinção de informações via componentes e gerar atualização na Lista de produtos após a execução de uma das funções. Eu apenas mantive dessa forma para que, a cada utilização de função, a lista de produtos possa ser atualizada e o usuário não precisa apertar f5 para ver uma lista atualizada. Porém, reconheço que é um gambiarra totalmente inapropriada, principalmente se tratando de React, onde a re-renderização apenas do componentes que alteraram é um princípio básico da existência da biblioteca.

- A simplicidade dos endpoints no backend e do banco de dados: Acredito que exagerei na simplicidade do backend e a criação apenas de uma tabela no banco foi um exagero na simplicidade do projeto. Apesar disso, acredito que consegui resolver o que foi solicitado no desafio, mas reconheço que foi uma criação simples demais e um pouco de escalonamento solicitaria uma reformulação de todo o projeto.

- Repeti bastante código nos componentes React e isso vai contra os princípios básicos de arquitetura limpa. É uma etapa que reconheço que seria fundalmental, porém não consegui melhorar minha abordagem nesse caso.

- O Design da página está bastante cru e a página está visialmente feia. Eu nunca tinha tido contato com o Material UI e como gastei uma boa parte do tempo na criação dos componentes React, não consegui aproveitar o restante do tempo para deixar a aplicação bonita e "apresentável". Porém, tentei criar algo que fizesse sentido, pelo menos separando as partes da aplicação que interagiam com um endpoint diferente.

- Por fim, seguirei lapidando a aplicação, visto que é uma excelente forma de aprendizado e estou à disposição para tirar qualquer dúvida sobre o código e sobre a lógica de qualquer funcionamento criado nele.
