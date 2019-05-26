import {
    NgModule,
    NO_ERRORS_SCHEMA,
} from '@angular/core';
import { ScreensModule } from '@app/screens/screens.module';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
    bootstrap: [
        AppComponent,
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        ScreensModule,
        TNSFontIconModule.forRoot({
            'mdi': './fonts/material-icons.css',
        }),
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
export class AppModule {}
