//DashboardComponent

import {
  Component
} from '@angular/core'

@Component({
  selector: 'ops-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html'
})

export class DashboardComponent {
  heading: string = 'Welcome to the Order Processing System!';
  subHeading: string = 'Here you can manage inventory and orders for our customers.';
  pendingOrders: any[] = [{
    'item' : 'List group item heading',
    'LastUpdatedDTTM' : '9/18/2016 8:12:38 PM',
    'description' : 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit...'

  },
  {
    'item' : 'List group item heading2',
    'LastUpdatedDTTM' : '10/15/2016 8:12:38 PM',
    'description' : 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit...'

  }]
}