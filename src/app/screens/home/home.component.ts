import { ItemEventData } from 'tns-core-modules/ui/list-view'
import {
    Component,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    moduleId: module.id,
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    todos: { name: string, imageSrc: string }[] = [
        {
            name: 'Morning yoga class',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/au.png',
        },
        {
            name: 'Drop kids in School',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/be.png',
        },
        {
            name: 'Purchase food',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/bg.png',
        },
        {
            name: 'Canada',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ca.png',
        },
        {
            name: 'Switzerland',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ch.png',
        },
        {
            name: 'China',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/cn.png',
        },
        {
            name: 'Czech Republic',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/cz.png',
        },
        {
            name: 'Germany',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/de.png',
        },
        {
            name: 'Spain',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/es.png',
        },
        {
            name: 'Ethiopia',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/et.png',
        },
        {
            name: 'Croatia',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/hr.png',
        },
        {
            name: 'Hungary',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/hu.png',
        },
        {
            name: 'Italy',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/it.png',
        },
        {
            name: 'Jamaica',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/jm.png',
        },
        {
            name: 'Romania',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ro.png',
        },
        {
            name: 'Russia',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/ru.png',
        },
        {
            name: 'United States',
            imageSrc: 'https://play.nativescript.org/dist/assets/img/flags/us.png',
        },
    ];

    showOptions(args: ItemEventData): void {
        console.log('Item with index: ' + args.index + ' tapped');
    }

    addTodo() {
        // TODO: Pending of implementation
    }
}
