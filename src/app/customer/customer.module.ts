import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';



@NgModule({
  declarations: [CustomerRoutingModule.components, EditCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule 
  ]
})
export class CustomerModule { }
