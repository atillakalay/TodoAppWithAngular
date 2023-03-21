import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoAdd } from 'src/app/models/todo-add';
import { TodoService } from 'src/app/services/TodoService';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  todoForm = new FormGroup({
    content: new FormControl('')
  })

  constructor(private todoService: TodoService, private router: Router) {

  }

  ngOnInit(): void {

  }

  add() {
    this.todoService.add(this.todoForm.value as TodoAdd).subscribe(x => {
      if (x == true) {
        this.router.navigateByUrl("/todos")
      }
    })
  }
}
