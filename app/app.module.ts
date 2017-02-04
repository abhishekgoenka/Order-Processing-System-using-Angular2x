import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { NewClientComponent } from './newClient/newClient.component'
import { CoolestProductComponent } from './shared/coolestproduct/coolestproduct.component'
import { IdeaCenterComponent } from './shared/ideacenter/ideacenter.component'
//import { WelcomeComponent } from './home/welcome.component';

/* Feature Modules */
//import { ProductModule } from './products/product.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'newClient', component: NewClientComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    NewClientComponent,
    CoolestProductComponent,
    IdeaCenterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
