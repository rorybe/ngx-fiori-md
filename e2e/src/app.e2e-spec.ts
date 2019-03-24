import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';
import * as jp from '../../src/assets/i18n/jp.json';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display consistent task Created By name', (done) => {
    // @TODO FIND ALT SOLUTION TO HANDLE WEBSOCKETS
    browser.sleep(5000);
    const tile = page.getTile(2);
    const masterCreatedBy = page.getTileTaskCreatedBy(tile);
    masterCreatedBy.click().then(() => {
      const detailCreatedBy = page.getTaskCreatedBy();
      expect(masterCreatedBy.getText()).toBe(detailCreatedBy.getText());
      done();
    });
  });

  it('should change the language for all translatable texts', (done) => {
    page.getUserMenu().click()
      .then(() => page.getUserMenuItem(0).click())
      .then(() => {
        const menuTitle = element(by.className('fd-shellbar__title fd-product-menu__title'));
        expect(menuTitle.getText()).toBe(jp.portal);
        done();
      });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
