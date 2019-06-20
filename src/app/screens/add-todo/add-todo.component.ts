import {
    AfterViewInit,
    Component,
    ElementRef,
    ViewChild,
} from '@angular/core';
import { Todo } from '@app/shared/models';
import { TodoState } from '@app/store';
import {
    Emittable,
    Emitter,
} from '@ngxs-labs/emitter';
import { RouterExtensions } from 'nativescript-angular';
import { TextField } from 'tns-core-modules/ui/text-field';

@Component({
    selector: 'ns-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements AfterViewInit {

    todoTitle: string;

    @Emitter(TodoState.addTodo) addTodo: Emittable<Todo>;

    @ViewChild('textField') textFieldRef: ElementRef<TextField>;

    constructor(private router: RouterExtensions) { }

    ngAfterViewInit(): void {
        setTimeout(() => this.focusTextField(), 600);
    }

    focusTextField() {
        const textField = this.textFieldRef.nativeElement;
        textField.focus();
    }

    createTodo() {
        this.router.back();

        if (!this.todoTitle) { return; }

        this.addTodo.emit(new Todo(this.todoTitle));

    }

}
