// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pageobjects/Login';
// import { Add_user } from '../pageobjects/Adduser';

// test('Create new Admin user via POM', async ({ page }) => {
//   const login = new LoginPage(page);
//   const Adduser = new Add_user(page);

//   // Login
//   await login.openLoginPage();
//   await login.login('Admin', 'admin123');

//   // Navigate to Admin page
//   await Adduser.navigateToAdmin();

//   // Fill user form
//   await Adduser.fillUserForm('th5user3', 'Orange Test', 'admin123');

//   // Search for the created user
//   await Adduser.searchUser('th5user3');

//   // Validate user exists
//   await expect(Adduser.table).toContainText('th5user3');
// });

import { test, expect } from '@playwright/test';
import xlsx from 'xlsx';
import { LoginPage } from '../pageobjects/Login';
import { Add_user } from '../pageobjects/Adduser';

// Read Excel file
const workbook = xlsx.readFile('./test-data/credentials.xlsx');
const worksheet = workbook.Sheets['login_data'];
const data = xlsx.utils.sheet_to_json(worksheet);

test('Create new Admin user', async ({ page }) => {
  const login = new LoginPage(page);
  const Adduser = new Add_user(page);

  // Read credentials
  const username = data[0].username;
  const password = data[0].password;

  // Login using Excel data
  await login.openLoginPage();
  await login.login(username, password);

  // Navigate to Admin page
  await Adduser.navigateToAdmin();

  // Fill user form
  await Adduser.fillUserForm('th5user3', 'Orange Test', 'admin123');

  // Search for created user
  await Adduser.searchUser('th5user3');

  // Validate user exists
  await expect(Adduser.table).toContainText('th5user3');
});
