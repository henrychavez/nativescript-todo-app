import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';

@Component({
    selector: 'ns-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
    @Input() items: any[];

    @Output() itemSelected = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    emitTap(index: number) {
        this.itemSelected.emit(index);
    }
}
