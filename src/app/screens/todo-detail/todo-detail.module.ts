import {
    NgModule,
    NO_ERRORS_SCHEMA,
} from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TodoDetailComponent } from './todo-detail.component';

@NgModule({
    declarations: [TodoDetailComponent],
    imports: [
        NativeScriptCommonModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class TodoDetailModule {}
