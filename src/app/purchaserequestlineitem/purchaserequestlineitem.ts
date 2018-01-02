import {dbClass} from '.././dbClass';
export class PurchaseRequestLineItem extends dbClass {

  constructor(){
    super();
    this.ID;
    this.PurchaseRequestID = 0;
    this.ProductID = 0;
    this.Quantity = 0;
    this.IsActive = true;
    this.UpdatedByUser;
  }

  ID: number;
  PurchaseRequestID: number;
  ProductID: number;
  Quantity: number;
  IsActive: boolean;
  UpdatedByUser: number;
}