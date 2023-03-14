
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)},
  {path:'customers/:id',loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)},
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
