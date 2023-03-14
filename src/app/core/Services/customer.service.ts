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
  getCustomer(id:number):Observable<ICustomer|undefined>{
    return  of(this.customers.find(c=>c.id===id));
  }
  updateCustomer(customer:ICustomer):Observable<boolean>{
     let customers= this.customers.filter(c=>c.id!=customer.id);
     this.customers=[...customers,customer];
     return of(true);
  }
}
