import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {PurchaseRequestLineItem} from './purchaserequestlineitem';

const urlBase = 'http://localhost:8080/';
const mvcCtrl = 'PurchaseRequestLineItems/';
const url: string = urlBase + mvcCtrl;

@Injectable()
export class UserService {

  list(): Promise<PurchaseRequestLineItem[]> {
    return this.http.get(url+"List")
      .toPromise()
      .then(resp=>resp.json() as PurchaseRequestLineItem[])
      .catch(this.handleError)
  }

  get(prli: PurchaseRequestLineItem) : Promise<any>{
    return this.http.get(url+prli.ID)
      .toPromise()
      .then(resp=>resp.json() as PurchaseRequestLineItem)
      .catch(this.handleError)
  }

  // change(user: User) : Promise<any>{

  // }

  // add(user: User) : Promise<any>{

  // }

  // remove(user: User) : Promise<any>{

  // }

  private handleError(error:any): Promise<any> {
    console.error('an error has occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

}