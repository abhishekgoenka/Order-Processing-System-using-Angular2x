//DashboardComponent

import {
  Component,
  OnInit
} from '@angular/core'

import {
  IPendingOrder
} from './IPendingOrder';
import {
  DashBoardService
} from './dashboard.service'

@Component({
  selector: 'ops-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  errorMessage :String;
  heading: string = 'Welcome to the Order Processing System!';
  subHeading: string = 'Here you can manage inventory and orders for our customers.';
  pendingOrders: IPendingOrder[];

  constructor(private _service: DashBoardService) {

  }

  //Lifecycle hook that is called after data-bound properties of a directive are initialized.
  ngOnInit(): void {
    console.log('DashboardComponent Initialized');
    this._service.getPendingOrders()
      .subscribe(orders => this.pendingOrders = orders, error => this.errorMessage = <any>error);
  }
}