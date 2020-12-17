import { createReducer, on } from '@ngrx/store';
import {crear, toggle, editar, borrar, toggleAll, limpiarTodos} from './todo.actions';
import {Todo} from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo del Capitan America'),
];

/*
 [...state] operador spreed: crea un nuevo arreglo extra, para no mutar el objeto,
 llendo cada uno de los items y los regresa de manera independiente
 [...state, new Todo(texto)] adiciona el nuevo estado al nuevo arreglo
*/
const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {
    // return del estado
    return state.map( todo => {
      // return del mapa se hace así para no mutar el objeto del mapa
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    // return del estado
    return state.map( todo => {
      // return del mapa se hace así para no mutar el objeto del mapa
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        };
      } else {
        return todo;
      }
    });
  }),
  on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggleAll, (state, { completado }) => state.map( todo => {
        return {
          ...todo,
          completado: completado
        };
    })
  ),
  on(limpiarTodos, (state  ) => state.filter(todo => !todo.completado )),


);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
