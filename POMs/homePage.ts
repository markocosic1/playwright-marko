import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly createNewOfferButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createNewOfferButton = page.getByRole('button', { name: 'Create new offer' });
    }

    async createNewOffer() {
        await this.createNewOfferButton.click();
    }
}
