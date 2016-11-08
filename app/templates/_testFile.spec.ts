<%- licenseHeader %>
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AlfrescoSettingsService, AlfrescoApiService, AlfrescoAuthenticationService, CoreModule } from 'ng2-alfresco-core';

import { <%= projectNameCamelCase %>Component } from '../src/<%= projectName %>.component';

describe('<%= projectName %>', () => {

    let component: <%= projectNameCamelCase %>Component;
    let fixture: ComponentFixture<<%= projectNameCamelCase %>Component>;
    let debug: DebugElement;
    let element: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CoreModule
            ],
            declarations: [<%= projectNameCamelCase %>Component],
            providers: [
                AlfrescoSettingsService,
                AlfrescoAuthenticationService,
                AlfrescoApiService
                /*,
                {provide: AlfrescoAuthenticationService, useClass: AuthenticationMock},
                {provide: AlfrescoTranslationService, useClass: TranslationMock}
                */
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(<%= projectNameCamelCase %>Component);

        debug = fixture.debugElement;
        element = fixture.nativeElement;
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should display hello world', () => {
        expect(element.querySelector('h1')).toBeDefined();
        expect(element.getElementsByTagName('h1')[0].innerHTML).toEqual('Hello World Angular 2 test01');
    });

});
