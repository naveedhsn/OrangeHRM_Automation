import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/Login';

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.redirect();
  await loginPage.login('Admin', 'admin123');

    // Navigate to Admin Page - variable
  const gotoadmin = page.getByRole('link', { name: 'Admin' });
  const clickaddbutton = page.getByRole('button', { name: ' Add' });

    // Select User Role - variable
  const userrole = page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first();
  const selectrole = page.getByRole('option', { name: 'Admin' });

    // Search Employee Name - variable
  const employee = page.getByRole('textbox', { name: 'Type for hints...' });
  const selectemployee = page.getByRole('option', { name: 'Orange Test' });

    // Select Status - variable
  const status = page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
  const statusenabled = page.getByRole('option', { name: 'Enabled' });

    // Enter Username - variable
  const username = page.getByRole('textbox').nth(2);

    // Enter Password - variable
  const password = page.getByRole('textbox').nth(3);

    // Confirm Password - variable
  const confirmpass = page.getByRole('textbox').nth(4);

    // Search for created user - variable
  const search_user = page.getByRole('textbox').nth(1);

  // Navigate to Admin Page
  await gotoadmin.click();
  await clickaddbutton.click();

  // Select User Role
  await userrole.click();
  await selectrole.click();

  // Search Employee Name
  await employee.click();
  await employee.fill('Orange Test');
  await selectemployee.click();

  // Select Status
  await status.click();
  await statusenabled.click();

  // Enter Username
  await username.click();
  await username.fill('th5user1');

  // Enter Password
  await password.click();
  await password.fill('admin123');

  // Confirm Password
  await confirmpass.click();
  await confirmpass.fill('admin123');

  // Save User
  await page.getByRole('button', { name: 'Save' }).click();

  // Search for created user
  await search_user.click();
  await search_user.fill('th5user1');

  await page.getByRole('button', { name: 'Search' }).click();

  // Validate user exists
  await expect(page.getByRole('table')).toContainText('th5user1');

});