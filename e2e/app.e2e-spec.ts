import { DaudrTechPage } from './app.po';

describe('daudr-tech App', function() {
  let page: DaudrTechPage;

  beforeEach(() => {
    page = new DaudrTechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
