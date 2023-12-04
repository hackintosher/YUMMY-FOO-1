import { Selector } from 'testcafe';

class AdminPage {
  constructor() {
    this.pageId = '#list-recipe-admin-page';
    this.editButtonId = '#admin-edit-button';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoAdminEdit(testController) {
    await testController.click('#admin-edit-button');
  }

  async gotoAdminEditSubmit(testController) {
    await testController.click('#admin-submit-button');
  }

  async gotoAdminRemove(testController) {
    await testController.click('#admin-remove-button');
  }

  async gotoAdminRemoveOK(testController) {
    await testController.click('#admin-remove-ok');
  }
}

export const adminPage = new AdminPage();
