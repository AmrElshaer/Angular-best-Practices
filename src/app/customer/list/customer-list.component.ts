import { Component, Input, OnInit } from '@angular/core';
import { EmitEvent, EventBusService, Events } from 'src/app/core/Services/event-bus.service';
import { SorterService } from 'src/app/core/Services/sorter.service';
import { TrackByService } from 'src/app/core/Services/trackby.service';
import { ICustomer } from 'src/app/shared/interfaces/ICustomer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

 
  @Input() customers: ICustomer[] = [];

  constructor(private eventbus:EventBusService,private sorterService: SorterService, public trackbyService: TrackByService) { }

  ngOnInit() {

  }

  sort(prop: any) {
    this.customers = this.sorterService.sort(this.customers, prop);
  }
  selectCustomer(cust: ICustomer) {
    // Send customer to any eventbus listeners listening for the CustomerSelected event
    this.eventbus.emit(new EmitEvent(Events.CustomerSelected, cust));
  }


}
