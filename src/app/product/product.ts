import {dbClass} from '.././dbClass';
export class Product extends dbClass {

  constructor() {
    super();
    this.ID;
    this.VendorID = 0;
    this.PartNumber = '';
    this.Name = '';
    this.Price = 0;
    this.Unit = '';
    this.PhotoPath = '';
    this.IsActive = true;
    this.UpdatedByUser;
  }

  ID: number;
  VendorID: number;
  PartNumber: string;
  Name: string;
  Price: number;
  Unit: string;
  PhotoPath: string;
  IsActive: boolean;
  UpdatedByUser: number;
}