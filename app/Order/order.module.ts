//Order Module

import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { InvalidRouteGuardService } from '../shared/invalidroute.service'

import { NewOrderComponent } from './orderNew/newOrder.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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