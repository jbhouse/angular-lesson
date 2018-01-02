import { Component, OnInit } from '@angular/core';
import {PurchaseRequestLineItem} from './purchaserequestlineitem'

@Component({
  selector: 'app-purchaserequestlineitem',
  templateUrl: './purchaserequestlineitem.component.html',
  styleUrls: ['./purchaserequestlineitem.component.css']
})
export class PurchaseRequestLineItemComponent implements OnInit {

  myPRLI : PurchaseRequestLineItem;

  constructor() { }

  ngOnInit() {
    this.myPRLI = new PurchaseRequestLineItem();
    this.myPRLI.populateAttributeArray();
    this.myPRLI.populateAttributeTypeHash();
  }

}
