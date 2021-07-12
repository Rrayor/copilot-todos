import { Injectable } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Array<Todo> = [];

  public addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  public getTodos() {
    return this.todos;
  }

  public getTodosCompleted() {
    return this.todos.filter((todo) => todo.completed);
  }

  public getTodosNotCompleted() {
    return this.todos.filter((todo) => !todo.completed);
  }

  public removeTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  public completeTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  public clearCompletedTodos() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  public getCompletedTodosCount() {
    return this.todos.filter((todo) => todo.completed).length;
  }

  public getNotCompletedTodosCount() {
    return this.todos.length - this.getCompletedTodosCount();
  }

  public getTodosCount() {
    return this.todos.length;
  }

  public getNextId(): number {
    return this.todos.length + 1;
  }
}
