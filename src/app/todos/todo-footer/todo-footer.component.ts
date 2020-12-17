import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Appstate} from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';
import {limpiarTodos} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  pendientes: number = 0;

  constructor(private store: Store<Appstate>) { }

  ngOnInit(): void {
    this.store.subscribe(state =>
    {
      this.filtroActual = state.filtro;
      this.pendientes =  state.todos.filter(todo => !todo.completado ).length;
    });
  }

  cambiarFiltro(filtro: actions.filtrosValidos): void {
    this.store.dispatch(actions.setFiltro({ filtro }));
  }

  limpiarCompletados(): void {
    this.store.dispatch(limpiarTodos());
  }
}
