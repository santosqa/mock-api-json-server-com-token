- **https://about.me/santosqa** -

- **https://santosqa.apidog.io/** -

# Mock API JSON Server com Autenticação JWT

Este é um projeto de exemplo que demonstra como criar um mock de API RESTful utilizando o JSON Server, juntamente com autenticação JWT (JSON Web Token).

## Visão Geral

Este projeto implementa uma API RESTful com os seguintes recursos:

- Autenticação de usuários com JWT
- CRUD (Create, Read, Update, Delete) para usuários
- CRUD para posts
- (Você também poderá criar novas rotas com novos contratos para atender sua necessidade)

A API é construída utilizando o JSON Server, um pacote Node.js que permite criar rapidamente uma API RESTful a partir de um arquivo JSON.

## Pré-requisitos

Antes de executar o projeto, você precisa ter o Node.js e o Yarn instalados em seu sistema.

## Instalação

1. Clone este repositório:
git clone https://github.com/santosqa/mock-api-json-server-com-token.git


2. Navegue até o diretório do projeto:
cd ...seu-diretorio/mock-api-json-server-com-token


3. Instale as dependências do projeto:
  $ yarn install


## Configuração

Antes de iniciar o servidor, você precisa configurar a chave secreta para a geração de tokens JWT. 
Abra o arquivo `server.js` e defina a chave secreta na variável `SECRET_KEY`.


## Execução

Para iniciar o servidor, execute o seguinte comando:
  $ node server.js

Isso iniciará o servidor JSON na porta 6000 por padrão.


## Uso

Após iniciar o servidor, você pode acessar os endpoints da API utilizando qualquer cliente HTTP, como `curl` ou ferramentas como Postman ou Insomnia.

Para autenticação, faça uma solicitação POST para `/auth/login` com as credenciais de usuário. Você receberá um token JWT válido que deve ser incluído no cabeçalho de autorização (`Authorization: Bearer <token>`).


## Endpoints Disponíveis

- **POST /auth/login:** Autenticação de usuário. Requer username e password no corpo da solicitação. Retorna um token de acesso JWT válido.

- **GET /users:** Recupera todos os usuários. Requer token de acesso JWT no cabeçalho de autorização.

- **POST /users:** Cria um novo usuário. Requer token de acesso JWT no cabeçalho de autorização e dados do usuário no corpo da solicitação.

- **PUT /users/:id:** Atualiza um usuário existente. Requer token de acesso JWT no cabeçalho de autorização e dados do usuário atualizados no corpo da solicitação.

- **DELETE /users/:id:** Exclui um usuário existente. Requer token de acesso JWT no cabeçalho de autorização.

- **GET /posts:** Recupera todos os posts. Requer token de acesso JWT no cabeçalho de autorização.

- **POST /posts:** Cria um novo post. Requer token de acesso JWT no cabeçalho de autorização e dados do post no corpo da solicitação.

- **PUT /posts/:id:** Atualiza um post existente. Requer token de acesso JWT no cabeçalho de autorização e dados do post atualizados no corpo da solicitação.

- **DELETE /posts/:id:** Exclui um post existente. Requer token de acesso JWT no cabeçalho de autorização.



## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).







