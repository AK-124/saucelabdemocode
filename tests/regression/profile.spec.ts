
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { getEnv } from '../../src/utils/env';

test.describe('Regression | Adding item into the cart and View it', () => {
  test('add_to_cart&&view_in_the_cart', async ({ page }) => {
    const env = getEnv();
    const lp = new LoginPage(page);
    await lp.open();
    await lp.login(env.USER_EMAIL, env.USER_PASS);
    await lp.assertLoggedIn();

    // Add two items by data-test id
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Badge should show 2
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

    // Go to cart
    await page.locator('#shopping_cart_container').click();
    await expect(page.locator('.cart_item')).toHaveCount(2);

    // Proceed to checkout flow until the overview page
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('QA');
    await page.locator('[data-test="lastName"]').fill('Engineer');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('.title')).toHaveText('Checkout: Overview');
  });
});
