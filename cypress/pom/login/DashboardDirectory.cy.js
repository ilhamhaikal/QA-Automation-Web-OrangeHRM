export default class DirectoryPage {
    // Kunjungi halaman Directory
    static visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory');
    }

    // Verifikasi toggle visibility
    static verifyToggleVisible() {
        cy.get('.--toggle')
            .should('be.visible'); // Pastikan elemen toggle terlihat
    }

    // Mencari pengguna berdasarkan nama
    static searchUser(name) {
        cy.log(`Searching for user: ${name}`); // Log untuk debugging
        cy.get('.oxd-table-filter input[placeholder="Type for hints..."]')
            .should('be.visible') // Pastikan input terlihat
            .clear() // Bersihkan input sebelumnya
            .type(name); // Ketik nama pengguna

        cy.get('.oxd-autocomplete-option')
            .should('be.visible') // Tunggu autocomplete muncul
            .first()
            .click(); // Pilih opsi pertama
    }

    // Memilih job title dari dropdown
    static selectJobTitle(jobTitle) {
        cy.log(`Selecting job title: ${jobTitle}`); // Log untuk debugging
        cy.get('.oxd-select-text--active')
            .first()
            .click(); // Buka dropdown job title

        cy.get('.oxd-select-dropdown')
            .contains(jobTitle) // Cari job title sesuai parameter
            .should('be.visible') // Pastikan elemen terlihat
            .click(); // Pilih job title
    }

    // Memilih lokasi dari dropdown
    static selectLocation(location) {
        cy.log(`Selecting location: ${location}`); // Log untuk debugging
        cy.get('.oxd-select-text--active')
            .eq(1)
            .click(); // Buka dropdown lokasi

        cy.get('.oxd-select-dropdown')
            .contains(location) // Cari lokasi sesuai parameter
            .should('be.visible') // Pastikan elemen terlihat
            .click(); // Pilih lokasi
    }

    // Klik tombol Search
    static clickSearchButton() {
        cy.get('.oxd-table-filter button[type="submit"]')
            .should('be.enabled') // Pastikan tombol aktif
            .click(); // Klik tombol Search
    }

    // Verifikasi pengguna ditemukan
    static verifyUserFound(name) {
        cy.log(`Verifying user found: ${name}`); // Log untuk debugging
        cy.get('.oxd-grid-4')
            .should('contain', name) // Pastikan nama pengguna ada
            .and('be.visible'); // Pastikan elemen terlihat
    }
}
