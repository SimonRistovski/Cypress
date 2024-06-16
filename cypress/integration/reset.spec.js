describe('Reset Password Form', () => {
    beforeEach(() => {
      cy.visit('path/to/page.html');
    });
  
    it('should display validation error messages for required fields', () => {
      cy.get('.needs-validation').within(() => {
        cy.get('button[type="submit"]').click();
        cy.get('.invalid-feedback').should('have.length', 2);
      });
    });
  
    it('should allow successful form submission with valid input', () => {
      cy.get('.needs-validation').within(() => {
        cy.get('#password').type('newpassword');
        cy.get('#password-confirm').type('newpassword');
        cy.get('button[type="submit"]').click();
      });
  
      // Add assertions for any expected behavior after successful form submission
    });
  
    it('should show confirmation message when "Logout all devices" checkbox is checked', () => {
      cy.get('.needs-validation').within(() => {
        cy.get('#logout').check();
        cy.get('button[type="submit"]').click();
        cy.contains('Password reset successfully and all devices logged out');
      });
  
      // Add assertions for the expected behavior when the "Logout all devices" checkbox is checked
    });
  });
  