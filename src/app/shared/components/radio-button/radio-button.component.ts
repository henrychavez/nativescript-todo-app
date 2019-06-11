import {
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
} from '@angular/core';
import { Label } from 'tns-core-modules/ui/label';

import { Directive } from '@angular/core';

@Directive({ selector: '[radioButtonText]' })
export class RadioButtonTextDirective {}

@Component({
    selector: 'ns-radio-button',
    templateUrl: './radio-button.component.html',
    styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit, OnDestroy {

    @Input() checked: boolean = false;

    @Output('tap') tap: EventEmitter<void> = new EventEmitter();

    @ContentChildren(RadioButtonTextDirective) radioButtonText: QueryList<Label>;

    private timeoutId: number;

    ngOnInit(): void {

    }

    toggleButton() {
        this.checked = !this.checked;
        this.timeoutId = setTimeout(() => this.tap.emit(), 300);
    }

    ngOnDestroy(): void {
        clearTimeout(this.timeoutId)
    }
}
