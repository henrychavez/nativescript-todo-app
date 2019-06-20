import {
    NgModule,
    NO_ERRORS_SCHEMA,
} from '@angular/core';
import { TodoListModule } from '@app/shared/components';
import { TasksPipe } from '@app/shared/pipes';
import { registerElement } from 'nativescript-angular';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CardView } from 'nativescript-cardview';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { HomeComponent } from './home.component';

registerElement('CardView', () => CardView);

@NgModule({
    declarations: [
        HomeComponent,
        TasksPipe,
    ],
    imports: [
        NativeScriptCommonModule,
        TNSFontIconModule,
        TodoListModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
