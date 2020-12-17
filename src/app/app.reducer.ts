import {Todo} from './todos/models/todo.model';
import {ActionReducerMap} from '@ngrx/store';
import {todoReducer} from './todos/todo.reducer';
import {filtrosValidos} from './filtro/filtro.actions';
import {filtroReducer} from './filtro/filtro.reducers';

export interface Appstate {
  todos: Todo[];
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<Appstate> = {
  todos: todoReducer,
  filtro: filtroReducer
}
