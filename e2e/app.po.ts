import { browser, element, by } from 'protractor';

export class RedditAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('red-root h1')).getText();
  }
}
