import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/todos', pathMatch:'full'},
  {path:'todos',component:TodoListComponent},
   {path:'todo-add',component:TodoListComponent},
    {path:'todo-update/:id',component:TodoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }