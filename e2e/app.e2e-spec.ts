import { TestPackagePage } from './app.po';

describe('test-package App', () => {
  let page: TestPackagePage;

  beforeEach(() => {
    page = new TestPackagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
