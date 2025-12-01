class Add_user {
  constructor(page) {
    this.page = page;

    // Navigate & Add User
    this.goToAdmin = page.getByRole('link', { name: 'Admin' });
    this.addButton = page.getByRole('button', { name: ' Add' });

    // User Role
    this.userRoleDropdown = page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first();
    this.selectAdminRole = page.getByRole('option', { name: 'Admin' });

    // Employee
    this.employeeField = page.getByRole('textbox', { name: 'Type for hints...' });
    this.selectEmployee = page.getByRole('option', { name: 'Orange Test' });

    // Status
    this.statusDropdown = page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
    this.statusEnabled = page.getByRole('option', { name: 'Enabled' });

    // Username & Password
    this.usernameField = page.getByRole('textbox').nth(2);
    this.passwordField = page.getByRole('textbox').nth(3);
    this.confirmPasswordField = page.getByRole('textbox').nth(4);

    // Search User
    this.searchUserField = page.getByRole('textbox').nth(1);

    // Save
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.searchButton = page.getByRole('button', { name: 'Search' });

    // Table (Validation)
    this.table = page.getByRole('table');
  }

  async navigateToAdmin() {
    await this.goToAdmin.click();
    await this.addButton.click();
  }

  async fillUserForm(username, employeeName, password) {
    // User Role
    await this.userRoleDropdown.click();
    await this.selectAdminRole.click();

    // Employee Name
    await this.employeeField.fill(employeeName);
    await this.selectEmployee.click();

    // Status
    await this.statusDropdown.click();
    await this.statusEnabled.click();

    // Username
    await this.usernameField.fill(username);

    // Password
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(password);

    // Save
    await this.saveButton.click();
  }

  async searchUser(username) {
    await this.searchUserField.fill(username);
    await this.searchButton.click();
  }
}

module.exports = { Add_user };
