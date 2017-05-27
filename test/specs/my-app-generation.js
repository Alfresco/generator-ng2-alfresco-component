'use strict';

describe('Test component', function () {

  beforeEach(function () {
    browser.driver.manage().timeouts().implicitlyWait(1220000);
    browser.driver.get('http://localhost:3000');
  });

  afterAll(function () {
    browser.driver.close();
  });

  it('Hello world page should be loaded', function (done) {
    browser.driver.sleep(12);

    browser.driver.findElement(By.tagName('component-test')).then(()=> {
      done();
  });
  });
});
