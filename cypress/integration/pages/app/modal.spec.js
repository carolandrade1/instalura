/* eslint-disable max-len */
// <reference types="cypress" />
import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject';
import ProfileScreenPageObject from '../../../../src/components/screens/app/ProfileScreen/ProfileScreen.pageObject';

describe('/pages/app/profile/', () => {
  describe('when filling and submitting a form login request', () => {
    it('go to the profile page', () => {
      // Pré teste
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
        .as('userLogin');

      // Cenário
      const loginScreen = new LoginScreenPageObject(cy);
      loginScreen
        .fillLoginForm({ user: 'carolandrade1', password: 'senhasegura' })
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

    it('fill the post form with url image, select a filter and send the post ', () => {
      // Cenário
      const ProfileScreen = new ProfileScreenPageObject(cy);
      ProfileScreen
        .openModal()
        .fillPostForm()
        .submitPostForm();

      // Asserções
      cy.url().should('include', '/app/profile');
    });
  });
});
