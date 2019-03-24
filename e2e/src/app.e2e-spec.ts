import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    // @TODO GET RID OF THIS
    browser.sleep(5000);
  });

  it('should display consistent task Created By name', (done) => {
    const tile = page.getTile(2);
    const masterCreatedBy = page.getTileTaskCreatedBy(tile);
    masterCreatedBy.click().then(() => {
      const detailCreatedBy = page.getTaskCreatedBy();
      expect(masterCreatedBy.getText()).toBe(detailCreatedBy.getText());
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
