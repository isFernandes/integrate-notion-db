# Teste Jolifox

O teste tem como objetivo a criação de uma API REST em Node JS. A API deve manipular dados em um banco de dados hospedado no Notio.

## Requisitos

- A API a ser criada deve possuir 4 endpoints ao todo:
  - Criação de novo registro no banco com dados que serão enviados pelo usuári;
  - Buscar dados de registro especificado pelo usuário através do ID do registro;
  - Atualizar registro especificado pelo usuário através do ID com dados também provenientes da requisição do usuário;
  - Excluir um registro especificado pelo usuário através do ID.

## Description

Este projeto fez uso do NestJS para a construção da API. A escolha foi devido a sua facilidade de uso e pela gama de coisas já presentes e disponiveis em seu uso para realizar injeção de dependencias e seguir de forma mais organizada o padrão de projeto.

As interações com o banco de dados, todas foram realizadas devido a indisponibilidade de algumas funcionalidades no Notion SDK: [@notionhq/client@2.2.15](https://github.com/makenotion/notion-sdk-js/tree/main).

## Escolhas Técnicas

Durante a criação e atualização dos registros, foi realizado um parse do Objeto, de forma que ele evite IFs, e permita alterações futuras permitindo a aplicação de mais campos caso seja necessário `src\notions\notions.service.ts - Linhas 15 e 25`. A estrutura de pastas foi mantida de acordo com o Nest, onde preferi manter como dominio, centralizando tudo que possa ser relacionado ao Notion. O repositorio existe de maneira que seja possivel fazer alterações quanto a base do Notion, podendo integrar qualquer base que possua as mesmas propriedades (colunas), que podem ser incrementadas e modificadas com base em suas interfaces e validações.

- NestJS foi escolhido pela facilidade de implementação e funcionalidades que facilitam o seu desenvolvimento com base no [SOLID](https://www.alura.com.br/artigos/solid#o-que-e-solid?).
- Axios para integração com a base, devido a falta de funcionalidades no SDK
- Jest para testes, pois ele já vem integrado com o NestJS e facilita a criação de testes unitários.

## Instalação local

```bash
$ npm install
```

## Para compilar e rodar localmente

```bash
$ npm run start # rodando localmente sem esperar alterações

$ npm run start:dev # rodando localmente com a observação de alterações

$ npm run start:prod  # rodar o projeto compilado
```

## Testes

```bash
$ npm run test
```

## Resources

Essas são as tecnologias e ferramentas utilizadas no projeto:

- [NestJS](https://nestjs.com/)
- [Notion API](https://developers.notion.com/reference/intro)
- [Axios](https://axios-http.com/docs/intro)
- [Jest](https://jestjs.io/)
