import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';



@NgModule({
  declarations: [CustomerRoutingModule.components],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule 
    
  ]
})
export class CustomerModule { }
