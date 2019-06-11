import {
    NgModule,
    NO_ERRORS_SCHEMA,
} from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import {
    RadioButtonComponent,
    RadioButtonTextDirective,
} from './radio-button.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TNSFontIconModule,
    ],
    exports: [
        RadioButtonComponent,
        RadioButtonTextDirective,
    ],
    declarations: [
        RadioButtonComponent,
        RadioButtonTextDirective
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class RadioButtonModule {}
