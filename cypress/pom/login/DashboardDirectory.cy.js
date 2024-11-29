class DirectoryPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory');
    }

    verifyToggleVisible() {
        cy.get('.--toggle').should('be.visible'); // Pastikan toggle terlihat
    }

    searchUser(name) {
        cy.get('.oxd-table-filter input[placeholder="Type for hints..."]')
            .clear()
            .type(name); // Ketik nama pengguna
        cy.wait(5000); // Tunggu untuk autocomplete
        cy.get('.oxd-autocomplete-option').first().click(); // Klik opsi pertama
    }

    selectJobTitle(jobTitle) {
        cy.get('.oxd-select-text--active').first().click(); // Buka dropdown job title
        cy.get('.oxd-select-dropdown').contains(jobTitle).click(); // Pilih job title yang sesuai
    }

    selectLocation(location) {
        cy.get('.oxd-select-text--active').eq(1).click(); // Buka dropdown lokasi
        cy.get('.oxd-select-dropdown').contains(location).click(); // Pilih lokasi yang sesuai
    }

    clickSearchButton() {
        cy.get('.oxd-table-filter button[type="submit"]').click(); // Klik tombol pencarian
    }

    verifyUserFound(name) {
        cy.get('.oxd-grid-4').should('contain', name); // Verifikasi nama pengguna ditemukan
    }
}

export default new DirectoryPage();
