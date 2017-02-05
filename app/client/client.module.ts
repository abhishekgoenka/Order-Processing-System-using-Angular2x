// Client Module
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'

import { AllClientComponent } from './clientAll/clientall.component'
import { NewClientComponent } from './clientNew/newClient.component'

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'clients', component: AllClientComponent },
            { path: 'newClient', component: NewClientComponent },
        ])
    ],
    declarations: [
        AllClientComponent,
        NewClientComponent
    ]
})

export class ClientModule {

}