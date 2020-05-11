import { AngularFundementalsPage } from './app.po';

describe('angular-fundementals App', function() {
  let page: AngularFundementalsPage;

  beforeEach(() => {
    page = new AngularFundementalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
