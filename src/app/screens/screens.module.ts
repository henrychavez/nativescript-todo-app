import {
    NgModule,
    NO_ERRORS_SCHEMA,
} from '@angular/core';

import { AddTodoModule } from './add-todo/add-todo.module';
import { HomeModule } from './home/home.module';

@NgModule({
    imports: [
        HomeModule,
        AddTodoModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ScreensModule {}
