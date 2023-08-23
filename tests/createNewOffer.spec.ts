import { test } from '@playwright/test';
import { LoginPage } from '../POMs/loginPage';
import { LoginEnvironments } from '../environments/loginEnvironments';
import { HomePage } from '../POMs/homePage'; 
import { CreateNewOfferModal } from '../POMs/newOfferModal';
import { CreateNewOfferEnvironments } from '../environments/createNewOfferEnvironments';

test('Create new offer - client with no projects', async({ page }) => {
    const loginPage = new LoginPage(page);
    const loginEnvironments = new LoginEnvironments(page);
    await page.goto(loginEnvironments.baseUrl);
    await loginPage.login(loginEnvironments.validEmail, loginEnvironments.validPassword);
    await loginPage.assertLoginIsSuccessful();

    const homePage = new HomePage(page);
    await homePage.createNewOffer();

    const createNewOfferModal = new CreateNewOfferModal(page);
    const createNewOfferModalEnvironments = new CreateNewOfferEnvironments(page);
    await createNewOfferModal.selectClient(createNewOfferModalEnvironments.clienWithId0);
    await createNewOfferModal.assertErrorForClientWithNoProjects();
});
