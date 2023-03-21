import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/TodoService';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent {

  todoForm = new FormGroup({
    content: new FormControl(''),
    id: new FormControl()
  })
  id: number | undefined
  constructor(private todoService: TodoService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.todoService.get(this.id).subscribe(x => {
      this.todoForm.get('content')?.setValue(x.content)
      this.todoForm.get('id')?.setValue(x.id)
    })

  }

  update(){
    
  }





}
