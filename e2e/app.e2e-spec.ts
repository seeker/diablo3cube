import { Diablo3cubePage } from './app.po';

describe('diablo3cube App', () => {
  let page: Diablo3cubePage;

  beforeEach(() => {
    page = new Diablo3cubePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Diablo 3 item extraction tracker');
  });

  it('should display armor by default', () => {
    page.navigateTo();
    expect(page.getItemName()).toEqual('Akarat\'s Awakening');
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
    expect(page.getItemName()).toEqual('Akarat\'s Awakening');
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
});
