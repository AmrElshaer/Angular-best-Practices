import { CustomerService } from './../core/Services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces/ICustomer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: ICustomer[] = [];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customers=this.customerService.customers;
  }

}
