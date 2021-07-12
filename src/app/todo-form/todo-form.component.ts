import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent  {

  title: string;

  constructor(private todosService: TodosService) { }

  onSubmit(text: Todo) {
    this.todosService.addTodo(new Todo(this.todosService.getNextId(), text.title, false));
  }
}
