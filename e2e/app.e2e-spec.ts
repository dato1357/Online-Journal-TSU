import { OnlneJournalPage } from './app.po';

describe('onlne-journal App', () => {
  let page: OnlneJournalPage;

  beforeEach(() => {
    page = new OnlneJournalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
