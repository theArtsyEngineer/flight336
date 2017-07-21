import { AirlinesPage } from './app.po';

describe('airlines App', function() {
  let page: AirlinesPage;

  beforeEach(() => {
    page = new AirlinesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
