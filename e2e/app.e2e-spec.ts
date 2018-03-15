import { Diablo3cubePage } from './app.po';
import { browser, by, element } from 'protractor';

describe('diablo3cube App', () => {
  let page: Diablo3cubePage;

  beforeEach(() => {
    page = new Diablo3cubePage();
    page.navigateTo();
  });

  afterEach(() => {
    page.clearLocalStore();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Diablo 3 item extraction tracker');
  });

  it('should display armor by default', () => {
    page.navigateTo();
    expect(page.getItemName()).toEqual('Akkhan\'s Manacles');
  });

  it('should display weapons after clicking the weapons button', () => {
    page.navigateTo();
    page.clickButton('Weapons');
    expect(page.getItemName()).toEqual('Aether Walker');
  });

  it('should display jewelry after clicking the jewelry button', () => {
    page.navigateTo();
    page.clickButton('Jewelry');
    expect(page.getItemName()).toEqual('Ancestors\' Grace');
  });

  it('should display armor after clicking the armor button', () => {
    page.navigateTo();

    page.clickButton('Jewelry');
    expect(page.getItemName()).toEqual('Ancestors\' Grace');

    page.clickButton('Armor');
    expect(page.getItemName()).toEqual('Akkhan\'s Manacles');
  });

  it('should check seasonal checkbox', () => {
    page.navigateTo();
    page.clickCheckbox('checkbox-season');

    expect(page.isChecked('checkbox-season')).toBeTruthy();
  });

  it('should check normal checkbox', () => {
    page.navigateTo();
    page.clickCheckbox('checkbox-normal');

    expect(page.isChecked('checkbox-normal')).toBeTruthy();
  });

  it('should check stashed checkbox', () => {
    page.navigateTo();
    page.clickCheckbox('checkbox-stashed');

    expect(page.isChecked('checkbox-stashed')).toBeTruthy();
  });

  it('should navigate to settings', () => {
    page.navigateToSettings();

    expect(page.getH2()).toEqual('Settings');
  });

  it('should navigate to items', () => {
    page.navigateToSettings();
    page.navigateToItems();

    expect(page.getH2()).toEqual('Items');
  });

  it('should hide seasonal cubed items', () => {
    page.clickCheckbox('checkbox-season');

    page.clickHideSeason();
    page.navigateToItems();

    expect(page.getItemName()).toEqual('Ancient Parthan Defenders');
  });

  it('should hide normal cubed items', () => {
    page.clickCheckbox('checkbox-normal');

    page.clickHideNormal();
    page.navigateToItems();

    expect(page.getItemName()).toEqual('Ancient Parthan Defenders');
  });

  it('should move seasonal items to normal', () => {
    page.clickCheckbox('checkbox-season');

    page.navigateToSettings();
    page.clickButton('Move to Normal');
    page.confirmation(true);

    page.navigateToItems();

    expect(page.isChecked('checkbox-normal')).toBeTruthy();
    expect(page.isChecked('checkbox-season')).toBeFalsy();
  });

  it('should not move seasonal items to normal if cancelled', () => {
    page.clickCheckbox('checkbox-season');

    page.navigateToSettings();
    page.clickButton('Move to Normal');
    page.confirmation(false);

    page.navigateToItems();

    expect(page.isChecked('checkbox-normal')).toBeFalsy();
    expect(page.isChecked('checkbox-season')).toBeTruthy();
  });
});
