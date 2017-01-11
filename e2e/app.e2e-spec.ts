import { BrettPortfolioPage } from './app.po';

describe('brett-portfolio App', function() {
  let page: BrettPortfolioPage;

  beforeEach(() => {
    page = new BrettPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
