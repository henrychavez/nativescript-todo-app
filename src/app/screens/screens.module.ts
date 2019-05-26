import {
    NgModule,
    NO_ERRORS_SCHEMA,
} from '@angular/core';

import { AddTodoModule } from './add-todo/add-todo.module';
import { HomeModule } from './home/home.module';
import { TodoDetailModule } from './todo-detail/todo-detail.module';

@NgModule({
    imports: [
        HomeModule,
        AddTodoModule,
        TodoDetailModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ScreensModule {}
