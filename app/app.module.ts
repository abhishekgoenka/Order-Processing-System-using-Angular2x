import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AllClientComponent } from './client/clientAll/clientall.component'
import { NewClientComponent } from './client/clientNew/newClient.component'

import { CoolestProductComponent } from './shared/coolestproduct/coolestproduct.component'
import { IdeaCenterComponent } from './shared/ideacenter/ideacenter.component'

import { NewOrderComponent } from './order/orderNew/newOrder.component'
import { NewItemComponent } from './inventory/newItem/newItem.component'
import { CurrentInventoryComponent } from './inventory/currentInventory/currentInventory.component'

import { InvalidRouteGuardService } from './shared/invalidroute.service'

/* Feature Modules */
//import { ProductModule } from './products/product.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'clients', component: AllClientComponent },
      { path: 'newClient', component: NewClientComponent },
      { path: 'neworder', component: NewOrderComponent },
      { path: 'pendingorders', canActivate: [ InvalidRouteGuardService ],  component: NewOrderComponent },
      { path: 'orderhistory',  canActivate: [ InvalidRouteGuardService ], component: NewOrderComponent },
      { path: 'newitem', component: NewItemComponent },
      { path: 'inventory', component: CurrentInventoryComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AllClientComponent,
    NewClientComponent,
    CoolestProductComponent,
    IdeaCenterComponent,
    NewOrderComponent,
    NewItemComponent,
    CurrentInventoryComponent
  ],
  providers: [ InvalidRouteGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
