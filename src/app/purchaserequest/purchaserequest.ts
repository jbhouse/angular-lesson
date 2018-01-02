import {dbClass} from '.././dbClass';
export class PurchaseRequest extends dbClass {

  constructor(){
    super();
    this.ID;
    this.UserID;
    this.StatusID= 0;
    this.Description = '';
    this.Justification = '';
    this.DateNeeded = '';
    this.DeliveryMode = '';
    this.SubmittedDate;
    this.IsActive = true;
    this.ReasonForRejection = '';
    this.UpdatedByUser;
  }

  ID: number;
  UserID: number;
  StatusID: number;
  Description: string;
  Justification: string;
  DateNeeded: string;
  DeliveryMode: string;
  SubmittedDate: string;
  IsActive: boolean;
  ReasonForRejection: string;
  UpdatedByUser: number;
}