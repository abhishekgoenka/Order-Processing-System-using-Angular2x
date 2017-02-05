// Client Module
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AllClientComponent } from './clientAll/clientall.component'
import { NewClientComponent } from './clientNew/newClient.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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