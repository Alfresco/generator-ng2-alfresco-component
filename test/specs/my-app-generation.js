'use strict';

describe('Test component', function () {

  beforeEach(function () {
    browser.driver.manage().timeouts().implicitlyWait(60000);
    browser.driver.get('http://localhost:3000');
  });

  afterEach(function () {
    browser.driver.quit();
  });

  it('Hello world page should be loaded', function (done) {
    browser.driver.findElement(By.tagName('my-app')).then(()=> {
      done();
    });
  });
});
