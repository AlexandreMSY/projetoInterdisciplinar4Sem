<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Agenda Hospitalar</h3>

  <p align="center">
    Projeto Acadêmico
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o Projeto</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

--

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Feito Utilizando

- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![Node.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.JS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
- ![Sequelize.JS](https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Rodando o Projeto

Para rodar o projeto na maquina local, é preciso atender os pré-requisitos e seguir os passos abaixo.

### Pré-requisitos

- npm

```sh
npm install npm@latest -g
```

- [Node.JS](https://nodejs.org/en)

### Instalação

1. Clone o repositório do GitHub

```sh
git clone https://github.com/AlexandreMSY/projetoInterdisciplinar4Sem.git
```

2. Crie um arquivo .env com as na pasta raiz do projeto com as seguintes chaves

```sh
  # conexão banco de dados

  DB_DATABASE=agendamento_consultas #nome do banco de dados
  DB_USERNAME=root #nome do usuário do banco
  DB_PASSWORD=root #senha do banco
  DB_HOST=localhost #endereço do banco

  # chave secreta jwt

  CHAVE_PRIVADA=chaveSecreta #uma chave secreta para a geração de tokens JWT
```

3. Instale as dependências npm

```sh
  npm install
```

4. Inicie o servidor

```sh
  npm run start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Como Usar

### Especificação da API

<!-- Usuarios -->

<h3 align="center">/api/usuarios</h3>

### **POST** `/registrarUsuario`<br/>

#### Corpo da Requisição

- `nome` - Nome do usuário a ser registrado
- `senha` - Senha do usuário para logar no sistema
- `email` - Email do usuário
- `telefone` - Telefone do usuário
- `dataNascimento` - Data de nascimento do usuário. Padrão YYYY-MM-DD

<details>
  <summary>Exemplo de Requisição e Resposta</summary>
  <h4>Requisição</h4>
  
  <pre><code>
    {
      "nome": "Usuario Teste",
      "senha": "senha1234",
      "email": "usuarioteste@gmail.com",
      "telefone": "123456789",
      "dataNascimento": "1999-04-23"
    }
  </code></pre>
  
  <h4>Resposta</h4>
  <pre><code>
    {
      {
        "sucesso": true,
        "mensagem": "Usuario criado com sucesso",
        "usuarioCriado": {
          "usuario_id": "5e0c5b6a-25e7-495d-9cd3-e59249c203da",
          "nome": "Usuario Teste",
          "senha": "senha1234",
          "email": "usuarioteste@gmail.com",
          "telefone": "123456789",
          "data_nascimento": "1999-04-23T00:00:00.000Z"
        }
      }
    }
  </code></pre>
</details>

<hr>

### **PUT** `/atualizarUsuario`</br>

#### Corpo da Requisição

- `usuario` - Dados do usuário necessários localizar o usuário a ser modificado.
  - `email` - Email do usuário a ser atualizado
  - `senha` - Senha do usuário a ser atualizado
- `novosDados` - Dados do usuário que serão atualizados. As chaves abaixo são todos os atributos do usuário que podem ser modificados.
  - `usuario_id`
  - `nome`
  - `senha`
  - `email`
  - `telefone`
  - `data_nascimento` - Padrão YYYY-MM-DD

<details>
  <summary>Exemplo de Requisição e Resposta</summary>
  <h4>Requisição</h4>
  <pre><code>
    {
      "usuario": {
          "email": "usuarioteste@gmail.com",
          "senha": "senha1234"
      },
      "novosDados": {
          "nome": "Atualizar Usuario",
          "email": "usuarioatualizado@gmail.com"
      }
    }
  </code></pre>
  
  <h4>Resposta</h4>
  <pre><code>
    {
      "sucesso": true,
      "mensagem": "Usuário alterado",
      "dadosAlterados": {
        "nome": "Atualizar Usuario",
        "email": "usuarioatualizado@gmail.com"
      }
    }
  </code></pre>
</details>

<hr>

### **POST** `/login`</br>

Esta rota da API retorna um token **JWT** com os dados do usuário para ser utilizado na aplicação front-end.

#### Corpo da Requisição

- `email` - Email do usuário cadastrado no banco de dados.
- `senha` - Senha do usuário

<details>
  <summary>Exemplo de Requisição e Resposta</summary>
  <h4>Requisição</h4>
  <pre><code>
    {
      "email": "usuarioatualizado@gmail.com",
      "senha": "senha1234"
    }
  </code></pre>

  <h4>Resposta</h4>
  <pre><code>
    {
      "sucesso": true,
      "tokenDeAcesso": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjoiNWUwYzViNmEtMjVlNy00OTVkLTljZDMtZTU5MjQ5YzIwM2RhIiwibm9tZSI6IkF0dWFsaXphciBVc3VhcmlvIiwic2VuaGEiOiJzZW5oYTEyMzQiLCJlbWFpbCI6InVzdWFyaW9hdHVhbGl6YWRvQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTIzNDU2Nzg5IiwiZGF0YV9uYXNjaW1lbnRvIjoiMTk5OS0wNC0yM1QwMDowMDowMC4wMDBaIiwiaWF0IjoxNjk2OTExOTAzLCJleHAiOjE3Mjg0Njk1MDN9.WThhJ20fpORpQpyKV7duKrzxRqNgDCiOFBlpFJv0Xzg"
    }
  </code></pre>
  <h4>Token <strong>JWT</strong> descifrado</h4>
  <pre><code>
    {
      alg: "HS256",
      typ: "JWT"
    }.
    {
      usuario_id: "5e0c5b6a-25e7-495d-9cd3-e59249c203da",
      nome: "Atualizar Usuario",
      senha: "senha1234",
      email: "usuarioatualizado@gmail.com",
      telefone: "123456789",
      data_nascimento: "1999-04-23T00:00:00.000Z",
      iat: 1696911903,
      exp: 1728469503
    }.
    [signature]
  </code></pre>
</details>

<h3 align="center">/api/consulta</h3>

### **POST** `/registrarConsulta`<br/>

#### Corpo da Requisição

- `usuario_id` - ID UUID do usuário que será atribuído a consulta. O ID pode ser encontrado no atributo `usuario_id` na tabela `usuarios` no banco de dados.
- `data_hora` - Data e hora que será agendada a consulta. Padrão YYYY-MM-DD para data e HH:MM:SS para hora.
- `especialidade` - Especialidade da consulta.
- `observacoes` - Opcional.

<details>
  <summary>Exemplo de Requisição e Resposta</summary>
  <h4>Requisição</h4>
  <pre><code>
    {
      "usuario_id": "26aa07ab-4306-46e0-a88c-de3332bd761d",
      "data_hora": "10-10-2023 14:00:00",
      "especialidade": "Neuro",
      "observacoes": "Idoso"
    } 
  </code></pre>

  <h4>Resposta</h4>
  <pre><code>
    {
      "sucesso": true,
      "consultaCriada": {
          "consulta_id": "428c67d5-6baf-4997-94f3-025fa4919433",
          "usuario_id": "26aa07ab-4306-46e0-a88c-de3332bd761d",
          "data_hora": "2023-10-10T17:00:00.000Z",
          "especialidade": "Neuro",
          "observacoes": "Idoso"
      }
    }
  </code></pre>
</details>

<hr>

### **GET** `/id`

Esta rota retorna todas as consultas que estão atribuídas ao usuário.

#### Parâmetros da Requisição

- `id` - O identificador do usuário. O identificador é o atributo `usuario_id` utilizado na tabela `usuarios` no banco de dados.

<details>
  <summary>Exemplo de Requisição e Resposta</summary>
  <h4>Requisição</h4>
  <pre><code>
  localhost:8000/api/consulta/26aa07ab-4306-46e0-a88c-de3332bd761d
  </code></pre>
  
  <h4>Resposta</h4>
  <pre><code>
    {
      "sucesso": true,
      "consultas": [
        {
          "consulta_id": "08bbeba4-38f8-4c8f-b504-4608e4d40d1c",
          "usuario_id": "26aa07ab-4306-46e0-a88c-de3332bd761d",
          "data_hora": "2023-10-10T17:00:00.000Z",
          "especialidade": "Neuro",
          "observacoes": "Idoso",
          "UsuarioUsuarioId": null
        },
        {
          "consulta_id": "100df249-062a-407b-a32f-fbc34869fcb8",
          "usuario_id": "26aa07ab-4306-46e0-a88c-de3332bd761d",
          "data_hora": "2023-10-10T17:00:00.000Z",
          "especialidade": "Neuro",
          "observacoes": "Idoso",
          "UsuarioUsuarioId": null
        }
      ]
    }
  </code></pre>
</details>

### **PUT** `/atualizarConsulta`

Modifica uma consulta presente no banco de dados.

#### Corpo da Requisição

- `usuario` - Chave com valores para autenticar o usuário.
  - `senha` - Senha do usuário.
  - `email` - Email do usuário.
- `consulta` - Dados necessários para modificar a consulta.
  - `consulta_id` - ID da consulta a ser alterada.
  - `novosDados` - Dados da consulta que serão atualizados. Abaixo estão todos os atributos que podem ser mudados.
    - `consulta_id`
    - `usuario_id`
    - `data_hora` - Padrão YYYY-MM-DD HH:MM:SS
    - `especialidade`
    - `observacoes`

<details>
  <summary>Exemplo de Requisição e Resposta</summary>
  <h4>Requisição</h4>
  <pre><code>
    {
      "usuario": {
          "senha": "teste",
          "email": "teste"
      },
      "consulta": {
        "consulta_id": "100df249-062a-407b-a32f-fbc34869fcb8",
        "novosDados": {
          "especialidade": "Médico Geral",
          "data_hora": "2023-10-10 09:10:00"
        }
      }
    }
  </code></pre>
  <h4>Resposta</h4>
  <pre><code>
    {
      "sucesso": {
        "colunasAlteradas": true
      },
      "mensagem": "Consulta atualizada",
      "novosDados": {
        "especialidade": "Neurologista"
      }
    }
  </code></pre>
</details>

### **DELETE** `/cancelarConsulta`

#### Corpo da Requisição
- `usuario` - Chave com valores para autenticar o usuário.
  - `senha` - Senha do usuário.
  - `email` - Email do usuário.
- `consulta_id` - ID da consulta a ser cancelada.

<details>
  <summary>Exemplo de Requisição e Resposta</summary>
  <h4>Requisição</h4>
  <pre><code>
    {
      "usuario": {
        "senha": "teste",
        "email": "teste"
      },
      "consulta_id": "08bbeba4-38f8-4c8f-b504-4608e4d40d1c"
    }
  </code></pre>
  <h4>Resposta</h4>
  <pre><code>
    {
      "consultaApagada": true,
      "mensagem": "Consulta cancelada"
    }
  </code></pre>
</details>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
  - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- []()
- []()
- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>
