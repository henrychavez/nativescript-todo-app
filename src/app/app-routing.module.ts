import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AddTodoComponent } from './screens/add-todo';
import { HomeComponent } from './screens/home';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'add-todo',
        component: AddTodoComponent,
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
