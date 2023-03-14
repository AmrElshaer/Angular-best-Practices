import { CustomerService } from './../../core/Services/customer.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces/ICustomer';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer: ICustomer =
  {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: ''
  };
  @ViewChild('customerForm', { static: true }) customerForm: NgForm = {} as NgForm;
  constructor(private customerservice:CustomerService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: Params) => {
      const id = +params['id'];
      if (id !== 0) {
        this.getCustomer(id);
      }
    });
  
  }
  getCustomer(id:number){
    this.customerservice.getCustomer(id).subscribe(c=>{
      if(c){
        this.customer=c;
      }
    });
  }
  submit() {
      this.customerservice.updateCustomer(this.customer).subscribe(r=>console.log(r));
  }

}
