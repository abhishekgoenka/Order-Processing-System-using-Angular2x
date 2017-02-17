import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { InventoryModule } from './inventory/inventory.module'
import { ClientModule } from './client/client.module'
import { OrderModule } from './Order/order.module'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'


/* Feature Modules */
import { CoolestProductComponent } from './shared/coolestproduct/coolestproduct.component'
import { IdeaCenterComponent } from './shared/ideacenter/ideacenter.component'


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InventoryModule,
    ClientModule,
    OrderModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CoolestProductComponent,
    IdeaCenterComponent,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
