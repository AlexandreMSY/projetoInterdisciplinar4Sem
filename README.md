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

<h3 align="center">/api/usuarios</h3>

### **POST** `/registrarUsuario`<br/>

### Corpo da Requisição

- nome - Nome do usuário a ser registrado
- senha - Senha do usuário para logar no sistema
- email - Email do usuário
- telefone - Telefone do usuário
- dataNascimento - Data de nascimento do usuário. Padrão YYYY-MM-DD

<details open>
  <summary>Exemplo de Requisição e Resposta</summary>
  <h3>Requisição</h3>
  <code>

    {
      "nome": "Usuario Teste",
      "senha": "senha1234",
      "email": "usuarioteste@gmail.com",
      "telefone": "123456789",
      "dataNascimento": "1999-04-23"
    }

  </code>
  <h3>Resposta</h3>
  <code>

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

  </code>
</details>

### **PUT** `/atualizarUsuario`</br>

### Corpo da Requisição


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
