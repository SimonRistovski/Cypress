describe('Registration Form', () => {
    beforeEach(() => {
      cy.visit('path/to/page.html');
    });
  
    it('should display validation error messages for required fields', () => {
      cy.get('.needs-validation').within(() => {
        cy.get('button[type="submit"]').click();
        cy.get('.invalid-feedback').should('have.length', 3);
      });
    });
  
    it('should display validation error message for invalid email', () => {
      cy.get('.needs-validation').within(() => {
        cy.get('#name').type('John Doe');
        cy.get('#email').type('invalidemail');
        cy.get('button[type="submit"]').click();
        cy.get('.invalid-feedback').should('have.length', 1);
      });
    });
  
    it('should allow successful form submission with valid input', () => {
      cy.get('.needs-validation').within(() => {
        cy.get('#name').type('John Doe');
        cy.get('#email').type('johndoe@example.com');
        cy.get('#password').type('password123');
        cy.get('button[type="submit"]').click();
      });
  
      // Add assertions for any expected behavior after successful form submission
    });
  
    it('should navigate to the login page when "Login" link is clicked', () => {
      cy.get('.card-footer a').click();
      cy.url().should('include', 'index.html');
      // Add assertions for the expected behavior when the "Login" link is clicked
    });
  });
  