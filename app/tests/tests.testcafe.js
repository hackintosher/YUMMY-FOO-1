import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { aboutPage } from './about.page';
import { favoritesPage } from './favorites.page';
import { adminPage } from './admin.page';
import { addRecipePage } from './addrecipe.page';
import { searchPage } from './search.page';
import { recipePage } from './recipe.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const credentials2 = { username: 'admin@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
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

test('Test that the admin page shows', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials2.username, credentials2.password);
  await navBar.isLoggedIn(testController, credentials2.username);
  await navBar.gotoAdminPage(testController);
  await adminPage.isDisplayed(testController);
});

test('Test that the recipe page shows', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoFavoritesPage(testController);
  await favoritesPage.isDisplayed(testController);
  await navBar.gotoRecipePage(testController);
  await recipePage.isDisplayed(testController);
});
