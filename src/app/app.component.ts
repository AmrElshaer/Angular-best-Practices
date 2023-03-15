import { EventBusService, Events } from 'src/app/core/Services/event-bus.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICustomer } from './shared/interfaces/ICustomer';
import { NumberValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
@AutoUnsubscribe()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'Customer-Service';
  customer:ICustomer| null = null;
  eventbusSub: Subscription = new Subscription();
  /**
   *
   */
  constructor(private eventbus:EventBusService) {

  }
  ngOnDestroy(): void {
    // if(this.eventbusSub){
    //      this.eventbusSub.unsubscribe();
    // }
    // you don't need to make unsubscribe because auto
  }
  ngOnInit(): void {
    this.eventbusSub = this.eventbus.on(Events.CustomerSelected, (cust: ICustomer) => (this.customer = cust));
  }
}
