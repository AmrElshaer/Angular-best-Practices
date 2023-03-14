import { Injectable } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces/ICustomer';



@Injectable()
export class TrackByService {

  customer(index: number, customer: ICustomer) {
    return customer.id;
  }





}
