Cypress.Commands.add("fillMandatoryFields", (customer) => {

  const { name, birthday, driver_license, city, phoneNumbers, emails } = customer
  cy.get("#name").type(name);
  cy.get("#birthday").type(birthday);
  cy.get("#driver_license").type(driver_license);
  cy.get("#state").select(4);
  cy.get("#city").type(city);
});

Cypress.Commands.add("fillMandatoryFieldsUnderAge", (customer) => {

  const { name, birthday, city, responsibleName, responsiblePhone } = customer

  cy.get("#name").type(name);
  cy.get("#birthday").type(birthday);
  cy.get("#state").select(2);
  cy.get("#city").type(city);
  cy.get("#responsibleName").type(responsibleName);
  cy.get("#responsiblePhone").type(responsiblePhone);
});


