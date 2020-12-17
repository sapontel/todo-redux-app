import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Appstate} from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<Appstate>) {
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
    // this.store.select('').subscribe();
  }

  agregaqr(): void {
    if (this.txtInput.invalid) {
      return;
    }
    this.store.dispatch( actions.crear({texto: this.txtInput.value}));
    this.txtInput.reset();
  }
}
