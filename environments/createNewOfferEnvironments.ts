import { Page } from "@playwright/test";

export class CreateNewOfferEnvironments {
    page: Page;
    clienWithId0: string;
    clienWithId1: string;
    clienWithId2: string;
    projectWithId1: string;
    projectWithId2: string;
    croatianLanguage: string;
    englishLanguage: string;
    germanLanguage: string;

    constructor(page: Page) {
        this.page = page;
        this.clienWithId0 = 'Automation Test Company #0 [DO NOT DELETE]';
        this.clienWithId1 = 'Automation Test Company #1 [DO NOT DELETE]';
        this.clienWithId2 = 'Automation Test Company #2 [DO NOT DELETE]';
        this.projectWithId1 = 'Automation Test Project #1 [DO NOT DELETE]';
        this.projectWithId2 = 'Automation Test Project #2 [DO NOT DELETE]';
        this.croatianLanguage = 'Croatian';
        this.englishLanguage = 'English';
        this.germanLanguage = 'German';
    }
}
