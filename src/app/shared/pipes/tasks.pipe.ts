import {
    Pipe,
    PipeTransform,
} from '@angular/core';

@Pipe({
    name: 'tasks',
})
export class TasksPipe implements PipeTransform {
    transform(value: any[], ...args: any[]): string {
        const tasks = value.length;
        const text = tasks === 1 ? 'new task' : 'new tasks';

        return `${ tasks } ${ text }`;
    }
}
