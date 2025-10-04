
import { BasePage } from './BasePage';
import { expect, Locator, Page } from '@playwright/test';

export class LoginPage extends BasePage {
  private readonly userField: Locator;
  private readonly passField: Locator;
  private readonly submitBtn: Locator;
  private readonly productsTitle: Locator;
  private readonly errorMsg: Locator;

  constructor(page: Page) {
    super(page);
    // Swag Labs has data-test attributes
    this.userField = page.locator('[data-test="username"]');
    this.passField = page.locator('[data-test="password"]');
    this.submitBtn = page.locator('[data-test="login-button"]');
    this.productsTitle = page.locator('.title', { hasText: 'Products' });
    this.errorMsg = page.locator('[data-test="error"]');
  }

  async open() {
    await this.goto('/');
  }

  async login(username: string, password: string) {
    await this.userField.fill(username);
    await this.passField.fill(password);
    await this.submitBtn.click();
  }

  async assertLoggedIn() {
    await expect(this.productsTitle).toBeVisible();
  }

  async assertLoginError() {
    await expect(this.errorMsg).toBeVisible();
  }
}
