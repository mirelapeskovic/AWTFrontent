import { AwtWebAppPage } from './app.po';

describe('awt-web-app App', () => {
  let page: AwtWebAppPage;

  beforeEach(() => {
    page = new AwtWebAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
