import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-user', component: UserCreateComponent },
  { path: 'userlist', component:  UserListComponent},
  { path: 'user-edit/:id', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
