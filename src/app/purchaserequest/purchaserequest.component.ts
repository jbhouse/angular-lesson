import { Component, OnInit } from '@angular/core';
import {PurchaseRequest} from './purchaserequest'

@Component({
  selector: 'app-purchaserequest',
  templateUrl: './purchaserequest.component.html',
  styleUrls: ['./purchaserequest.component.css']
})
export class PurchaseRequestComponent implements OnInit {

  myPurchaseRequest : PurchaseRequest;

  constructor() { }

  ngOnInit() {
    this.myPurchaseRequest = new PurchaseRequest();
    this.myPurchaseRequest.populateAttributeArray();
    this.myPurchaseRequest.populateAttributeTypeHash();
  }

}
