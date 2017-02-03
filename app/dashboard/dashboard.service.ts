import { Injectable } from '@angular/core'
import { IPendingOrder } from './IPendingOrder'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/Operator/do';
import 'rxjs/add/Operator/map';
import 'rxjs/add/Operator/catch';

@Injectable()
export class DashBoardService {
  private _productURL = 'api/dummydata/pendingOrders.json';
  constructor(private _http: Http) {

  }

  //Returns pending orders
  getPendingOrders(): Observable<IPendingOrder[]> {
    return this._http.get(this._productURL)
      .map((_response: Response) => <IPendingOrder[]>_response.json())
      .do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError);
  }

  // Handle error
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}