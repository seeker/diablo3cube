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

  navigateToSettings() {
    return browser.get('/settings');
  }

  navigateToItems() {
    return browser.get('/items');
  }

  getH2() {
    return element(by.tagName('h2')).getText();
  }

  private clickSetting(id: string) {
    element(by.id(id)).click();
  }

  clickHideNormal() {
    this.navigateToSettings();
    this.clickSetting('setting-hide-normal');
  }

  clickHideSeason() {
    this.navigateToSettings();
    this.clickSetting('setting-hide-season');
  }

  clearLocalStore() {
    browser.executeScript('window.localStorage.clear();');
  }

  pause() {
    browser.pause();
  }

  confirmation(accept: boolean) {
    const alert = browser.switchTo().alert();

    if (accept) {
      alert.accept();
    } else {
      alert.dismiss();
    }
  }
}
