import { Arch1Page } from './app.po';

describe('arch1 App', function() {
  let page: Arch1Page;

  beforeEach(() => {
    page = new Arch1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
