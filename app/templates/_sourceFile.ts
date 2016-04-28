import {Component} from 'angular2/core';

@Component({
    selector: '<%= projectName %>',
    styles: [
      `
              :host h1 {
                  font-size:22px
              }
          `
    ],
    template: `<H1>Hello World Angular 2 <%= projectName %></H1>`
})
export class <%= projectNameCamelCase %> {}
