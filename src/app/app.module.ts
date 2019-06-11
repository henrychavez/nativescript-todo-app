import {
    NgModule,
    NO_ERRORS_SCHEMA,
} from '@angular/core';
import { ScreensModule } from '@app/screens/screens.module';
import { AppStoreEngine } from '@app/shared/services';
import { NgxsEmitPluginModule } from '@ngxs-labs/emitter';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { States } from './store';

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        TNSFontIconModule.forRoot({
            'mdi': './fonts/material-icons.css',
        }),
        NgxsModule.forRoot(States),
        NgxsStoragePluginModule.forRoot(),
        NgxsEmitPluginModule.forRoot(),
        ScreensModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [AppStoreEngine],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
export class AppModule {}
