import {
    NgModule,
    NO_ERRORS_SCHEMA,
} from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AddTodoComponent } from './add-todo.component';

@NgModule({
    declarations: [AddTodoComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AddTodoModule {}
