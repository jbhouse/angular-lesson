import { Component, OnInit } from '@angular/core';
import {Vendor} from './vendor'

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  myVendor : Vendor;

  constructor() { }

  ngOnInit() {
    this.myVendor = new Vendor();
    this.myVendor.populateAttributeArray();
    this.myVendor.populateAttributeTypeHash();
  }

}
