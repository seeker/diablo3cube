import { browser, by, element } from 'protractor';

export class Diablo3cubePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getItemName() {
    return element(by.className('item-name')).getText();
  }

  clickButton(name: string) {
    return element(by.buttonText(name)).click();
  }

  clickCheckbox(name: string) {
    return element(by.className(name)).click();
  }

  isChecked(name: string): any {
    // TODO use typescript instead of Javascript
    return element(by.className(name)).isSelected();
  }
}
