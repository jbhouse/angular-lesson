import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {UserListComponent} from './user-list/user-list.component';
import {VendorComponent} from './vendor/vendor.component';
import {VendorListComponent} from './vendor-list/vendor-list.component';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {PurchaseRequestComponent} from './purchaserequest/purchaserequest.component';
import {PurchaseRequestListComponent} from './purchaserequest-list/purchaserequest-list.component';
import {PurchaseRequestLineItemComponent} from './purchaserequestlineitem/purchaserequestlineitem.component';
import {PurchaseRequestLineItemListComponent} from './purchaserequestlineitem-list/purchaserequestlineitem-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'userlist', component: UserListComponent},
  {path: 'user', component: UserComponent},
  {path: 'vendorlist', component: VendorListComponent},
  {path: 'vendor', component: VendorComponent},
  {path: 'productlist', component: ProductListComponent},
  {path: 'product', component: ProductComponent},
  {path: 'purchaserequestlist', component: PurchaseRequestListComponent},
  {path: 'purchaserequest', component: PurchaseRequestComponent},
  {path: 'purchaserequestlineitemlist', component: PurchaseRequestLineItemListComponent},
  {path: 'purchaserequestlineitem', component: PurchaseRequestLineItemComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
