import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Appstate} from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completado: boolean = false;

  constructor(private store: Store<Appstate>) { }

  ngOnInit(): void {
  }

  toggleAll(): void {
    this.completado = !this.completado;
    this.store.dispatch(actions.toggleAll({completado: this.completado}));
  }
}
