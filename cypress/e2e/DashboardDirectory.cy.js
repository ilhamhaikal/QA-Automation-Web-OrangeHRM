import LoginPage from "../pom/login/login.cy.js";
import DirectoryPage from "../pom/login/DashboardDirectory.cy.js";

describe('User Directory Page', () => {
    beforeEach(() => {
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
