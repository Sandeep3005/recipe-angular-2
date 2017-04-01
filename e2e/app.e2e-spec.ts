import { RecipieProjectPage } from './app.po';

describe('recipie-project App', () => {
  let page: RecipieProjectPage;

  beforeEach(() => {
    page = new RecipieProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
