import { Injectable } from '@angular/core'
import { IPendingOrder } from './IPendingOrder'

@Injectable()
export class DashBoardService {
  pendingOrders: IPendingOrder[] = [{
    'item': 'List group item heading',
    'lastUpdatedDTTM': '9/18/2016 8:12:38 PM',
    'description': 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit...'

  },
  {
    'item': 'List group item heading2',
    'lastUpdatedDTTM': '10/15/2016 8:12:38 PM',
    'description': 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit...'

  }]
}