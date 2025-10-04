
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { getEnv } from '../utils/env';

type Fixtures = {
  login: () => Promise<void>;
};

export const test = base.extend<Fixtures>({
  login: async ({ page }, use) => {
    const env = getEnv();
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(env.USER_EMAIL, env.USER_PASS);
    await loginPage.assertLoggedIn();
    await use(async () => {});
  }
});

export const expect = test.expect;
