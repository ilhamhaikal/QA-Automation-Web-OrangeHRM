import LoginPage from "../pom/login/login.cy.js";
import ForgetPasswordPage from "../pom/login/ForgetPasswordPage.cy.js";
import DirectoryPage from "../pom/login/DashboardDirectory.cy.js";

describe('OrangeHRM Features', () => {
  // 1. Login Feature
  describe('Login Feature', () => {
    beforeEach(() => {
      LoginPage.visit();
    });

    it('should log in successfully with valid credentials', () => {
      LoginPage.enterUsername('Admin'); // Masukkan username yang valid
      LoginPage.enterPassword('admin123'); // Masukkan password yang valid
      LoginPage.submit();
      cy.url().should('include', '/dashboard'); // Pastikan user diarahkan ke dashboard
    });
  });

  // 2. Forget Password Feature
  describe('Forget Password Feature', () => {
    beforeEach(() => {
      ForgetPasswordPage.visit();
    });

    it('should send a reset password link for valid username', () => {
      ForgetPasswordPage.enterUsername('Admin'); // Username valid
      ForgetPasswordPage.clickResetButton();
      ForgetPasswordPage.verifySuccessMessage();
    });

    it('should show an error for invalid username', () => {
      ForgetPasswordPage.enterUsername('InvalidUser'); // Username tidak valid
      ForgetPasswordPage.clickResetButton();
    
    });
  });

  // 3. Directory Page Feature
  describe('User Directory Page', () => {
    beforeEach(() => {
      // Melakukan login sebelum mengakses directory
      LoginPage.visit();
      LoginPage.enterUsername('Admin'); // Masukkan username yang valid
      LoginPage.enterPassword('admin123'); // Masukkan password yang valid
      LoginPage.submit();
      DirectoryPage.visit(); // Kunjungi halaman directory
      cy.viewport(1280, 800); // Set resolusi browser
    });

    it('should search for Peter Mac Anderson with job title and location', () => {
      DirectoryPage.verifyToggleVisible(); // Pastikan elemen toggle terlihat
      DirectoryPage.searchUser('Peter Mac Anderson'); // Cari pengguna
      DirectoryPage.selectJobTitle('Chief Financial Officer'); // Pilih job title
      DirectoryPage.selectLocation('New York'); // Pilih lokasi
      DirectoryPage.clickSearchButton(); // Klik tombol pencarian
      DirectoryPage.verifyUserFound('Peter Mac Anderson'); // Verifikasi pengguna ditemukan
    });
  });
});
