import { expect, Locator, Page } from '@playwright/test';

export class CreateNewOfferModal {
    readonly page: Page;
    readonly newOfferModal: Locator;
    readonly clientBar: Locator;
    readonly clientBarError: Locator;
    readonly projectBar: Locator;
    readonly languageBar: Locator;
    readonly cancelButton: Locator;
    readonly continueButton; Locator;

    constructor(page: Page) {
        this.page = page;
        this.newOfferModal = page.getByText('Create New Offer');
        this.clientBar = page.locator('.css-9uxpgx');
        this.projectBar = page.locator('#react-select-2-placeholder');
        this.clientBarError = page.getByText('Selected client is without a project, please create a project first.');
        this.languageBar = page.locator('#react-select-3-placeholder');
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    async openModal() {
        await this.newOfferModal.click();
    }

    async selectClient(client: string) {
        await this.page.waitForTimeout(300);
        await this.clientBar.click();
        await this.page.getByText(client, { exact: true }).click();
    }

    async assertErrorForClientWithNoProjects() {
        await expect(this.clientBarError).toBeVisible();
    }
}
