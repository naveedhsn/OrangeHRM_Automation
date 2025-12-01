// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pageobjects/Login';

// test('Login', async ({ page }) => {
//   const loginPage = new LoginPage(page);

//   await loginPage.openLoginPage();
//   await loginPage.login('Admin', 'admin123');

//   await expect(page.getByRole('heading')).toContainText('Dashboard');
// });

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/Login';
import { readExcel } from '../pageobjects/excelReader';

const testData = readExcel('test-data/credentials.xlsx', 'login_data');

test.describe('Login Excel Data Test', () => {

  for (const data of testData) {

    test(`Login Test for ${data.username}`, async ({ page }) => {

      const loginPage = new LoginPage(page);
      await loginPage.openLoginPage();
      await loginPage.login(data.username, data.password);

      await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });

  }
});
