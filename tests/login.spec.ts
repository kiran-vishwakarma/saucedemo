// Import the Playwright testing library
import { test, expect } from '@playwright/test';

// Define the test
// Replace 'describe' with your specific test scenario
test.describe('SauceDemo Login Tests', () => {

  test('should successfully login with valid credentials', async ({ page }) => {
    // Navigate to the URL
    await page.goto('https://www.saucedemo.com/');

    // Enter username
    await page.fill('#user-name', 'standard_user');

    // Enter password
    await page.fill('#password', 'secret_sauce');

    // Click the login button
    await page.click('#login-button');

    // Verify that the user is redirected to the inventory page
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('should display error message for invalid credentials', async ({ page }) => {
    // Navigate to the URL
    await page.goto('https://www.saucedemo.com/');

    // Enter invalid username
    await page.fill('#user-name', 'invalid_user');

    // Enter invalid password
    await page.fill('#password', 'invalid_password');

    // Click the login button
    await page.click('#login-button');

    // Verify error message is displayed
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Epic sadface');
  });

});
