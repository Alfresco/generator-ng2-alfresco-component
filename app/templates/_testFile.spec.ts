<%- licenseHeader %>
import {describe, expect, it, inject, setBaseTestProviders} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';
import {<%= projectNameCamelCase %>Component} from '../src/<%= projectName %>.component';

describe('Basic Example test <%= projectName %>', () => {
  setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

  it('Test hello world', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb
      .createAsync(<%= projectNameCamelCase %>Component)
      .then((fixture) => {
        let element = fixture.nativeElement;
        expect(element.querySelector('h1')).toBeDefined();
        expect(element.getElementsByTagName('h1')[0].innerHTML).toEqual('Hello World Angular 2 <%= projectName %>');
      });
  }));
});
