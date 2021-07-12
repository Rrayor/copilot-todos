import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  title: string;

  todos: Array<Todo> = [];

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
  }
}
