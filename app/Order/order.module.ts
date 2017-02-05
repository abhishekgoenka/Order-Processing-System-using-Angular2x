//Order Module

import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'

import { InvalidRouteGuardService } from '../shared/invalidroute.service'

import { NewOrderComponent } from './orderNew/newOrder.component'

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'neworder', component: NewOrderComponent },
            { path: 'pendingorders', canActivate: [InvalidRouteGuardService], component: NewOrderComponent },
            { path: 'orderhistory', canActivate: [InvalidRouteGuardService], component: NewOrderComponent },
        ])
    ],
    declarations: [
        NewOrderComponent
    ],
    providers: [InvalidRouteGuardService],
})

export class OrderModule {

}