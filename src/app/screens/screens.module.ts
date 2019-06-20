import {
    NgModule,
    NO_ERRORS_SCHEMA,
} from '@angular/core';

import { HomeModule } from './home';
import { AddTodoModule } from './add-todo';

@NgModule({
    imports: [
        HomeModule,
        AddTodoModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ScreensModule {}
