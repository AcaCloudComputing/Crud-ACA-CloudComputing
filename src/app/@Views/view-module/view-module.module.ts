import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../@Shared/shared-module/shared-module.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from 'src/app/@Views/add-post/add-post.component';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../login/login.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RegisterComponent } from '../register/register.component';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ViewModuleRoutingModule } from '../view-module-routing.module';

@NgModule({
  declarations: [
    UserListComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent,
    NotFoundComponent,
    HeaderComponent,
    AddPostComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [UserListComponent],
})
export class ViewModuleModule {}
