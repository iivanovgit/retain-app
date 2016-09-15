import { RetainAppPage } from './app.po';

describe('retain-app App', function() {
  let page: RetainAppPage;

  beforeEach(() => {
    page = new RetainAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
