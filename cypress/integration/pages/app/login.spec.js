// <reference types="cypress" />
import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject';

describe('/pages/app/login/', () => {
  describe('when filling and submitting a form login request', () => {
    it('go to the profile page', () => {
      // Pré teste
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
        .as('userLogin');

      // Cenário
      const loginScreen = new LoginScreenPageObject(cy);

      loginScreen
        .fillLoginForm({ user: 'omariosouto', password: 'senhasegura' })
        .submitLoginForm();

      // Asserções
      cy.url().should('include', '/app/profile');

      cy.wait('@userLogin')
        .then((intercept) => {
          const { token } = intercept.response.body.data;

          cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
            .should('exist')
            .should('have.property', 'value', token);
        });
    });
  });
});
