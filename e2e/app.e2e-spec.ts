import { ArboPage } from './app.po';

describe('arbo App', () => {
  let page: ArboPage;

  beforeEach(() => {
    page = new ArboPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
