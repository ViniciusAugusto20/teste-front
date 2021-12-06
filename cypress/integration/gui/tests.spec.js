/// <reference types="cypress" />

describe("Teste", () => {

  beforeEach(() => cy.visit(`${Cypress.config('baseUrl')}`));

  // Este teste cria um usuário maior de idade.
  it("create a user with more 18 year old", () => {
    const customer = {
     name: "Vinicius Augusto",
     birthday: "1997-09-16",
     driver_license: "12345678910",
     state: "Goías",
     city: "Goiânia",
    phoneNumbers:"62944445555",
    emails: "teste@teste.com"
    };
    cy.fillMandatoryFields(customer);
    cy.get(`#qa-submit-button`).click()
   });  

  // Este teste cria um usuário menor de idade.
   it("create a user with less 18 year old", () => {
    const customer = {
      name: "Vinicius Augusto",
      birthday: "2007-09-16",
      driver_license: "12345678910",
      state: "Goías",
      city: "Goiânia",
     phoneNumbers:"62944445555",
     emails: "teste@teste.com",
     responsibleName: "Roberto Carlos",
     responsiblePhone: "6291115555",
     };
    cy.fillMandatoryFieldsUnderAge(customer);
    cy.get(`#qa-submit-button`).click()
   });

  // Este teste vai até a página de slides e clica duas vezes para validar se
  // está sendo possível visulizar e clicar no botão de próximo.
  it("go to slider page and click next two times", () => {
    cy.visit(`${Cypress.config('baseUrl')}slider`)
    cy.get(`#qa-next-slide-button`).click()
    cy.get(`#qa-next-slide-button`).click()
  });

  // Este teste vai até a página de listagem de clientes e ve se é possível 
  // acessar a mesma.
  it("go to list clients", () => {
    cy.visit(`${Cypress.config('baseUrl')}clients`)
  });

});

 
