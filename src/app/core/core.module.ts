import { TrackByService } from './Services/trackby.service';
import { SorterService } from './Services/sorter.service';
import { CustomerService } from './Services/customer.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventBusService } from './Services/event-bus.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],providers:[CustomerService,SorterService,TrackByService,EventBusService]
})
export class CoreModule { }
