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
    return tile ? tile.all(by.css('.sapMObjectAttributeDiv p')).get(0) : undefined;
  }

  getTaskCreatedBy() {
    return element.all(by.css('app-detail .sapMOHBottomRow p.fd-action-bar__description')).get(0);
  }

  getUserMenu() {
    return element(by.className('fd-user-menu__control'));
  }

  getUserMenuItem(index) {
    return index > -1 ? element.all(by.css('.fd-user-menu .fd-menu__item')).get(index) : undefined;
  }
}
