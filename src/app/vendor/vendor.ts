import {dbClass} from '.././dbClass';
export class Vendor extends dbClass {

  constructor() {
  super();
  this.ID;
  this.Code = '';
  this.Name = '';
  this.Address = '';
  this.City = '';
  this.State = '';
  this.Zip = '';
  this.Phone = '';
  this.Email = '';
  this.IsPreApproved;
  this.IsActive = true;
  this.UpdatedByUser = 0;
  }

  ID: number;
  Code: string;
  Name: string;
  Address: string;
  City: string;
  State: string;
  Zip: string;
  Phone: string;
  Email: string;
  IsPreApproved: boolean;
  IsActive: boolean;
  UpdatedByUser: number;

}