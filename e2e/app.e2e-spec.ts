import { EstudocasoPage } from './app.po';

describe('estudocaso App', function() {
  let page: EstudocasoPage;

  beforeEach(() => {
    page = new EstudocasoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
