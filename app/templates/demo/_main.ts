<%- licenseHeader %>
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from 'ng2-alfresco-core';

import { <%= projectNameCamelCase %>Module } from '<%= projectName %>';

@Component({
  selector: 'my-app',
  template: `<<%= projectName %>></<%= projectName %>>`
})
class DemoApp {
  constructor() {
    console.log('constructor');
  }
}

@NgModule({
    imports: [
        BrowserModule,
        CoreModule.forRoot(),
        <%= projectNameCamelCase %>Module
    ],
    declarations: [ DemoApp ],
    bootstrap:    [ DemoApp ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
