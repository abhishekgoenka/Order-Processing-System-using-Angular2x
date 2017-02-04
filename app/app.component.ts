//


import { Component } from '@angular/core';
import { DashBoardService } from './dashboard/dashboard.service'

@Component({
    selector: 'ops-app',
    //template: '<ops-dashboard> loading... </ops-dashboard>',
    templateUrl : 'app/shared/routes/routes.shared.html',
    providers: [DashBoardService]
})

export class AppComponent {
    pageTitle: String = 'Order Processing System';
}

