import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './@Views/not-found/not-found.component';


const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./@Views/view-module/view-module.module').then(m => m.ViewModuleModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
