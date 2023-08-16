import { test } from '@playwright/test';
import { LoginPage } from '../POMs/loginPage';
import { LoginEnvironments } from '../environments/loginEnvironments';

test('Login with correct credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);

    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
});
