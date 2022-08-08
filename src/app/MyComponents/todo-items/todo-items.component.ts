import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent implements OnInit {
  @Input()
  todo!: Todo;
  constructor() {}
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {}
  onClick() {
    this.todoDelete.emit(this.todo);
    console.log('Event is clicked');
  }
}
