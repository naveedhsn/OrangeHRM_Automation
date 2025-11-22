import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/Login';

test('Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.redirect();
  await loginPage.login('Admin', 'admin123');

  await expect(page.getByRole('heading')).toContainText('Dashboard');
});
