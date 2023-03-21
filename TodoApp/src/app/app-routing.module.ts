import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/todos', pathMatch:'full'},
  {path:'todos',component:TodoListComponent},
   {path:'todo-add',component:TodoAddComponent},
    {path:'todo-update/:id',component:TodoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
