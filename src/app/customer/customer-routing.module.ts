import { CustomerListComponent } from './list/customer-list.component';
import { CustomerComponent } from './customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'',component:CustomerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
  static components=[CustomerComponent,CustomerListComponent];
 }
