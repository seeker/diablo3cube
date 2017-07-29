import { browser, by, element } from 'protractor';

export class Diablo3cubePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getItemDetail() {
    return element(by.className('item-detail')).getText();
  }

  clickButton(name: string) {
    return element(by.buttonText(name)).click();
  }
}
