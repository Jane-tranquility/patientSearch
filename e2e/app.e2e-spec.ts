import { PatientSearchPage } from './app.po';

describe('patient-search App', () => {
  let page: PatientSearchPage;

  beforeEach(() => {
    page = new PatientSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
