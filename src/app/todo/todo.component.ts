import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
a : number = 0
b : number = 0
result : number = 0
  todo : Todo = {
    "userId": 0,
    "id": 0,
    "title": '',
    "completed": false
    }
  constructor() { }

  ngOnInit(): void {
  }

  addValues(a: number, b: number): number {
    this.a = a;
    this.b = b

    return this.result = this.a + this.b;
  }

}
