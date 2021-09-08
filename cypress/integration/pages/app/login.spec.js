// <reference types="cypress" />
import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject';

describe('/pages/app/login/', () => {
  // it === test que estamos fazendo
  it('preencha os campos e vá para a página /app/profile', () => {
    cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/')
      .as('userLogin');

    const loginScreen = new LoginScreenPageObject(cy);

    loginScreen
      .fillLoginForm({ user: 'omariosouto', password: 'senhasegura' })
      .submitLoginForm();

    // o que esperamos? ir para "/app/profile/"
    cy.url().should('include', '/app/profile');

    // Temos o token?
    cy.wait('@userLogin')
      .then((intercept) => {
        // token do servidor
        const { token } = intercept.response.body.data;

        cy.getCookie('APP_TOKEN').should('exist')
          // token do cookie é igual ao do server?
          .should('have.property', 'value', token);
      });
  });
});
