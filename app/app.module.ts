import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'
//import { WelcomeComponent } from './home/welcome.component';

/* Feature Modules */
//import { ProductModule } from './products/product.module';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
