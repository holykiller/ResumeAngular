import { Component, OnInit } from "@angular/core";
import { Todo } from "../../model/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t !== todo);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
