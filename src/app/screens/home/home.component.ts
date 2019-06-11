import {
    Component,
    OnInit,
} from '@angular/core';
import { Todo } from '@app/shared/models';
import { TodoState } from '@app/store';
import {
    Emittable,
    Emitter,
} from '@ngxs-labs/emitter';
import { Select } from '@ngxs/store';
import { RouterExtensions } from 'nativescript-angular';
import { Observable } from 'rxjs';
import { Page } from 'tns-core-modules/ui/page';

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

    @Select(TodoState) todos$: Observable<Todo[]>;

    @Emitter(TodoState.removeTodo) removeTodo: Emittable<number>;

    constructor(
        private router: RouterExtensions,
        private page: Page,
    ) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

    navigateToAddTodo(): void {
        this.router.navigate(['add-todo']);
    }

    completeTask(index: number) {
        this.removeTodo.emit(index);
    }
}
