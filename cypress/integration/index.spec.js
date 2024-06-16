describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('path/to/login.html');
    });
  
    it('should display the login form', () => {
      cy.get('h1').should('contain', 'Login');
      cy.get('form').should('exist');
      cy.get('label[for="email"]').should('contain', 'E-Mail Address');
      cy.get('input#email').should('be.visible');
      cy.get('label[for="password"]').should('contain', 'Password');
      cy.get('input#password').should('be.visible');
      cy.get('input#remember').should('be.visible');
      cy.get('button[type="submit"]').should('contain', 'Login');
      cy.contains('Don\'t have an account?').should('be.visible');
      cy.contains('Create One').should('have.attr', 'href', 'register.html');
    });
  
    it('should show an error when submitting an empty form', () => {
      cy.get('button[type="submit"]').click();
      cy.get('.invalid-feedback').should('have.length', 2);
      cy.get('.invalid-feedback').eq(0).should('contain', 'Email is invalid');
      cy.get('.invalid-feedback').eq(1).should('contain', 'Password is required');
    });
  
    it('should successfully submit the form with valid credentials', () => {
      const email = 'test@example.com';
      const password = 'password';
  
      cy.get('input#email').type(email);
      cy.get('input#password').type(password);
      cy.get('button[type="submit"]').click();
  
      // Add assertions for the expected behavior after submitting the form, e.g., redirect or successful login message
    });
  
    it('should navigate to the registration page', () => {
      cy.contains('Create One').click();
      cy.url().should('include', 'register.html');
      // Add assertions for the registration page if needed
    });
  });
  