import { Component, OnInit } from '@angular/core';
import {Product} from './product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  myProduct : Product;

  constructor() { }

  ngOnInit() {
    this.myProduct = new Product();
    this.myProduct.populateAttributeArray();
    this.myProduct.populateAttributeTypeHash();
  }

}
