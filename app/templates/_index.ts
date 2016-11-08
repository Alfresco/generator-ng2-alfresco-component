<%- licenseHeader %>
import { NgModule } from '@angular/core';
import { CoreModule } from 'ng2-alfresco-core';

import { <%= projectNameCamelCase %>Component } from './src/<%= projectName %>.component';

export * from './src/<%= projectName %>.component';

@NgModule({
    imports: [
        CoreModule
    ],
    declarations: [
        <%= projectNameCamelCase %>Component
    ],
    providers: [
    ],
    exports: [
        <%= projectNameCamelCase %>Component
    ]
})
export class <%= projectNameCamelCase %>Module {}
