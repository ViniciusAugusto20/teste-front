/// <reference types="cypress" />

describe("Teste", () => {

  beforeEach(() => cy.visit(`${Cypress.config('baseUrl')}slider`));
  // Este teste vai até a página de slides e clica duas vezes para validar se
  // está sendo possível visulizar e clicar no botão de próximo.
  it("go to slider page and click next two times", () => {
    cy.get(`#qa-next-slide-button`).click()
    cy.get(`#qa-next-slide-button`).click()
  });

  
});

 
