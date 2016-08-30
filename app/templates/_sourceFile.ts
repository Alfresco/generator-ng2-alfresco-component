<%- licenseHeader %>
import { Component } from '@angular/core';

@Component({
    selector: '<%= projectName %>',
    styles: [`:host h1 { font-size:22px }`],
    template: `<h1>Hello World Angular 2 <%= projectName %></h1>`
})
export class <%= projectNameCamelCase %>Component {}
