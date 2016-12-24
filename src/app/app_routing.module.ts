import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodolistComponent } from './component/todo_list.component/todo_list.component';
import { TipDetailComponent } from './component/tip_detail.component/tip_detail.component';
import { EditTipComponent } from './component/edit_tip.component/edit_tip.component';
import { MoreOperationComponent } from './component/more_operation.component/more_operation.component';
import { AddTipComponent } from './component/add_tip.component/add_tip.component';


//定义路由URL
const routes: Routes = [
  { path: '', redirectTo: '/todo_list', pathMatch: 'full' },
  { path: 'todo_list', component: TodolistComponent },
  { path: 'todo_list/:id', component: TipDetailComponent },
  { path: 'todo_list/edit/:id', component: EditTipComponent },
  { path: 'todo_list/add-tip', component: AddTipComponent },
  { path: 'todo_list/more-operation/:id', component: MoreOperationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }