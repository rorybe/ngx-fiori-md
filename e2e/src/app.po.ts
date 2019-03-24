import { browser, by, element } from 'protractor';
import { elementAt } from 'rxjs/operators';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTile(index = 0) {
    return element.all(by.css('fd-tile')).get(index);
  }

  getTileTaskCreatedBy(tile) {
    return tile ? tile.element(by.css('.sapMObjectAttributeDiv p')) : undefined;
  }

  getTaskCreatedBy() {
    return element.all(by.css('app-detail .sapMOHBottomRow p.fd-action-bar__description')).get(0);
  }
}
