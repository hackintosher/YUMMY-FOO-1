import { Selector } from 'testcafe';

class SearchPage {
  constructor() {
    this.pageId = '#search-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async typeInSearch(testController, recipeName) {
    await this.isDisplayed(testController);
    await testController.typeText('#searchbar', recipeName);
    await testController.wait(1000);
  }

  async assertRecipeName(testController, expectedRecipeName) {
    const recipeNameElement = Selector('#recipe-name').withText(expectedRecipeName);
    await testController.expect(recipeNameElement.exists).ok();
  }

}

export const searchPage = new SearchPage();
