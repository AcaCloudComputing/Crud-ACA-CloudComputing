import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddPostComponent } from './add-post/add-post.component'; 
import { UserEditComponent } from './user-edit/user-edit.component';  
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegisterComponent,
  },
  {
    path: 'Home',
    component: UserListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-post', 
    component: AddPostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-post/:id',
    component: UserEditComponent,
    canActivate: [AuthGuard], 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewModuleRoutingModule {}
