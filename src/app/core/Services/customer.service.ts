import { Injectable } from '@angular/core';
import { Observable,from, of } from 'rxjs';
import { ICustomer } from 'src/app/shared/interfaces/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  customers:ICustomer[]=[
  {
    id:1,
    firstName:'amr',
    lastName:'elshaer',
    address:'cairo',
    city:'nasr city',
    gender:'male'
  },
  {
    id:2,
    firstName:'fares',
    lastName:'elshaer',
    address:'cairo',
    city:'nasr city',
    gender:'male'
  }
 ];
  
  getCustomers():Observable<ICustomer[]>{
   return of(this.customers);
  }
}
