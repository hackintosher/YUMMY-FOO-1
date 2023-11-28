import { Selector } from 'testcafe';

class AdminPage {
  constructor() {
    this.pageId = '#list-recipe-admin-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const adminPage = new AdminPage();
