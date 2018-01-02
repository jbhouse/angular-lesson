import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from './user/user.service';
import { VendorComponent } from './vendor/vendor.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PurchaseRequestComponent } from './purchaserequest/purchaserequest.component';
import { PurchaseRequestListComponent } from './purchaserequest-list/purchaserequest-list.component';
import { StatusComponent } from './status/status.component';
import { PurchaseRequestLineItemComponent } from './purchaserequestlineitem/purchaserequestlineitem.component';
import { PurchaseRequestLineItemListComponent } from './purchaserequestlineitem-list/purchaserequestlineitem-list.component'


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    UserComponent,
    UserListComponent,
    VendorComponent,
    VendorListComponent,
    ProductComponent,
    ProductListComponent,
    PurchaseRequestComponent,
    PurchaseRequestListComponent,
    StatusComponent,
    PurchaseRequestLineItemComponent,
    PurchaseRequestLineItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  // this is the base component
  bootstrap: [AppComponent]
})
export class AppModule { }
