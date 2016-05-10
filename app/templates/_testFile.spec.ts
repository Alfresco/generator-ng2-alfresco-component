import {describe, expect, it, injectAsync, TestComponentBuilder, setBaseTestProviders} from 'angular2/testing';
import {TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS} from 'angular2/platform/testing/browser';
import {<%= projectNameCamelCase %>} from '../src/<%= projectName %>.component';

describe('Basic Example test <%= projectName %>', () => {
  setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

  it('Test hello world', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb
      .createAsync(<%= projectNameCamelCase %>)
      .then((fixture) => {
        let element = fixture.nativeElement;
        expect(element.querySelector('h1')).toBeDefined();
        expect(element.getElementsByTagName('h1')[0].innerHTML).toEqual('Hello World Angular 2 <%= projectName %>');
      });
  }));
});
