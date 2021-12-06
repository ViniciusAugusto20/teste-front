# Teste-front

## :rocket:  Stack
Este projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [Cypress](https://www.cypress.io/)


No desenvolvimento do projeto além das tecnologias já citadas, foi utilizado também Context Api e Json-server.

### Inicialização

__Backend__

Para o backend deste projeto é necessário ter [Json-server](https://www.npmjs.com/package/json-server) instalado globalmente. Assim após já ter o mesmo instalado, para executar o projeto é necessário ir até a pasta mock (`src/assets/mock`) e executar o comando abaixo:
```
json-server --watch db.json --port 5555
```

__Frontend__
```js
  yarn install
```
Depois

```js
  yarn start
```
__Testes__

A aplicação conta com 4 testes desenvolvidos em Cypress. 

  * `create a user with more 18 year old` - Este teste cria um usuário maior de idade.
  * `create a user with less 18 year old` - Este teste cria um usuário menor de idade.
  * `go to slider page and click next two times` - Este teste vai até a página de slides e clica duas vezes para validar se está sendo possível visulizar e clicar no botão de próximo.
  * `go to list clients` - Este teste vai até a página de listagem de clientes e ve se é possível acessar a mesma.

Para a execução dos testes use o camando:

```js
  npm test
```

__Páginas__

A aplicação conta com três páginas sendo a Home a página de cadastro de usuários, a página de Slider sendo sua rota /slider e por fim a página de listagem dos usuários criados /clients.


### Utilização

A tela inicial é composta por um formulário onde é possível cadastrar um usuário após o preenchimento dos campos requisitados no mesmo. O formulário atua de forma dinâmica exibindo ou não campos conforme dados inseridos pelo usuário. 

A tela de Slider é formada por dados que são acessados diretamente de db.json -> sliders[ ]. Nesse arquivo é possível cadastrar e customizar o formato de exibição do slider ao alterar a propriedade  `typeOfSlide` para um dos quatro tipos disponíveis (default, titleBottom, middle, imgTop). A tela em si exibi os dados do json sendo possível alterar o slider exibido ao clicar em "Próximo".

Por fim a tela de clientes (/clients) exibe todos os clientes cadastrados na tela de formulário. 

### Demonstração

![](/public/demonstrationGif.gif)