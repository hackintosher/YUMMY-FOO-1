import { Selector } from 'testcafe';

class FavoritesPage {
  constructor() {
    this.pageId = '#favorites-page';
    this.favButton = '#fav-button';
    this.recipeCardSelector = Selector('.recipe-card');
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async assertRecipeName(testController, expectedRecipeName) {
    const recipeNameElement = Selector('#recipe-name').withText(expectedRecipeName);
    await testController.expect(recipeNameElement.exists).ok();
  }

  // Check the amount fo recipes on the favorites page (can't count added recipes)
  async assertRecipeCardCount(testController, count) {
    await testController.expect(this.recipeCardSelector.count).eql(count);
  }

}

export const favoritesPage = new FavoritesPage();
