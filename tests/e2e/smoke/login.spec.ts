
import { test, expect } from '../../src/fixtures/auth.fixture';
import { LoginPage } from '../../src/pages/LoginPage';

test.describe('Smoke | login', () => {
  test('Valid User', async ({ page, login }) => {
    await login();
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('invalid User', async ({ page }) => {
    const lp = new LoginPage(page);
    await lp.open();
    await lp.login('locked_out_user', 'wrong_password');
    await lp.assertLoginError();
  });
});
