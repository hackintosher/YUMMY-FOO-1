import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { aboutPage } from './about.page';
import { favoritesPage } from './favorites.page';
import { adminPage } from './admin.page';
import { addRecipePage } from './addrecipe.page';
import { searchPage } from './search.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const credentials2 = { username: 'admin@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db').page('localhost:3000');

// fixture('meteor-application-template-react localhost test with default db').page('127.0.0.1:3000');

test('Test that landing page shows up', async (testController) => {
  await navBar.gotoLandingPage(testController);
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that the about page shows', async (testController) => {
  await navBar.gotoAboutPage(testController);
  await aboutPage.isDisplayed(testController);
});

test('Test that the favorite page shows', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoFavoritesPage(testController);
  await favoritesPage.isDisplayed(testController);
});

test('Test that the add recipe page shows', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoAddRecipePage(testController);
  await addRecipePage.isDisplayed(testController);
});

test('Test that the search page shows', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoSearchPage(testController);
  await searchPage.isDisplayed(testController);
});

test('Test that recipes can be searched for', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoSearchPage(testController);
  await searchPage.typeInSearch(testController, 'Lemon Garlic Shrimp');
  await testController.wait(1000);
  await searchPage.assertRecipeName(testController, 'Lemon Garlic Shrimp');
});

test('Test that the admin page shows', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials2.username, credentials2.password);
  await navBar.isLoggedIn(testController, credentials2.username);
  await navBar.gotoAdminPage(testController);

  // Wait for the admin page to be displayed, with a timeout of 15 seconds
  await testController.expect(adminPage.pageSelector.exists).ok({ timeout: 15000 });
});

test('Test that recipes can be edited', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials2.username, credentials2.password);
  await navBar.isLoggedIn(testController, credentials2.username);
  await navBar.gotoAdminPage(testController);
  await adminPage.typeInSearch(testController, 'Crepes');
  await adminPage.gotoAdminEdit(testController);
  await adminPage.editIsDisplayed(testController);
  await adminPage.editRecipeName(testController, ' Test');
  // const textBoxSelector = Selector('#uniforms-0002-0000');
  // await t.click(textBoxSelector);
  await adminPage.gotoAdminEditSubmit(testController);
  await adminPage.assertRecipeName(testController, 'Crepes Test');
});

test('Test that recipes can be removed', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials2.username, credentials2.password);
  await navBar.isLoggedIn(testController, credentials2.username);
  await navBar.gotoAdminPage(testController);
  await adminPage.gotoAdminRemove(testController);
  // const textBoxSelector = Selector('#uniforms-0002-0000');
  // await t.click(textBoxSelector);
  // await adminPage.gotoAdminRemoveOK(testController);
});

// admin.test.js

test('Test that recipes can be searched for', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials2.username, credentials2.password);
  await navBar.isLoggedIn(testController, credentials2.username);
  await navBar.gotoAdminPage(testController);
  await adminPage.typeInSearch(testController, 'Bagels');

  // Make sure to wait for any asynchronous updates to the page
  await testController.wait(1000);

  // Assert that the correct recipe card is displayed
  await adminPage.assertRecipeName(testController, 'Bagels');
});
