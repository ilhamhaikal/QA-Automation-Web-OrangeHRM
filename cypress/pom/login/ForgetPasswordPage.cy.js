class ForgetPasswordPage {
    visit() {
      // Perbaiki URL Forget Password
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
    }
  
    enterUsername(username) {
      // Tunggu halaman sepenuhnya dimuat
      cy.contains('Reset Password').should('be.visible');
      cy.get('div.oxd-input-group input[name="username"]').type(username);
    }
  
    clickResetButton() {
        cy.get('button[type="submit"]').contains('Reset Password').click();
    }
  
    verifySuccessMessage() {
      cy.contains('Reset Password link sent successfully').should('be.visible');
    }
  
    // verifyErrorMessage() {
    //   cy.contains('No match for').should('be.visible');
    // }
  }
  
  export default new ForgetPasswordPage();
  