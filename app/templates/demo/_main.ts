<%- licenseHeader %>
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { <%= projectNameCamelCase %>Component } from '<%= projectName %>';

@Component({
  selector: 'my-app',
  template: `<<%= projectName %>></<%= projectName %>>`,
  directives: [<%= projectNameCamelCase %>Component]
})
class MyDemoApp {
  constructor() {
    console.log('constructor');
  }
}
bootstrap(MyDemoApp, [
  <%= projectNameCamelCase %>Component
]);
