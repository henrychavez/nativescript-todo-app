import {
    EmitterAction,
    Receiver,
} from '@ngxs-labs/emitter';
import {
    State,
    StateContext,
} from '@ngxs/store';
import { Todo } from '@app/shared/models';

@State<Todo[]>({
    name: 'todo',
    defaults: [],
})
export class TodoState {

    @Receiver()
    static addTodo(ctx: StateContext<Todo[]>, { payload }: EmitterAction<Todo>) {
        ctx.setState([
            payload,
            ...ctx.getState(),
        ]);
    }

    @Receiver()
    static removeTodo(ctx: StateContext<Todo[]>, { payload }: EmitterAction<number>) {
        const todos = ctx.getState();
        ctx.setState(todos.filter((_, i) => i !== payload));
    }
}
