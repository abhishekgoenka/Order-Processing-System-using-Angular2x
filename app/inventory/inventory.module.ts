// Inventory Module

import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'

import { NewItemComponent } from './newItem/newItem.component'
import { CurrentInventoryComponent } from './currentInventory/currentInventory.component'


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'newitem', component: NewItemComponent },
            { path: 'inventory', component: CurrentInventoryComponent },
        ])
    ],
    declarations: [
        NewItemComponent,
        CurrentInventoryComponent
    ]
})

export class InventoryModule {

}