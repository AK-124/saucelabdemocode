
import { Page, expect } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async goto(path: string = '/') {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }
  async expectUrlMatches(regex: RegExp) {
    await expect(this.page).toHaveURL(regex);
  }
}
