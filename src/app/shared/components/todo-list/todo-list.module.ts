import {
    NgModule,
    NO_ERRORS_SCHEMA,
} from '@angular/core';
import { RadioButtonModule } from '@app/shared/components/radio-button';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TodoListComponent } from './todo-list.component';

@NgModule({
    declarations: [TodoListComponent],
    imports: [
        NativeScriptCommonModule,
        RadioButtonModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [
        TodoListComponent,
    ],
})
export class TodoListModule {}
