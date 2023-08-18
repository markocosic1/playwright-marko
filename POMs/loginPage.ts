import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly loginButton: Locator;
    readonly emailFieldError: Locator;
    readonly passwordFieldError: Locator;
    readonly homeSection: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInputField = page.locator('label').filter({ hasText: 'Email' }).locator('div');
        this.passwordInputField = page.locator('label').filter({ hasText: 'Password' }).locator('div').first();
        this.loginButton = page.getByRole('button', { name: 'Log In' });
        this.emailFieldError = page.getByText('Incorrect email or password').first();
        this.passwordFieldError = page.getByText('Incorrect email or password').nth(1);
        this.homeSection = page.getByRole('link', { name: 'Home' });
    }

    async login(emailValue: string, passwordValue: string) {
        await this.emailInputField.fill(emailValue);
        await this.passwordInputField.fill(passwordValue);
        await this.loginButton.click();
    }

    async assertLoginIsSuccessful() {
        await expect(this.homeSection).toBeVisible();
    } 

    async assertErrorMessageIsVisible() {
        await expect(this.emailFieldError).toBeVisible();
        await expect(this.passwordFieldError).toBeVisible();
    }
}
