// Inventory Module

import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { NewItemComponent } from './newItem/newItem.component'
import { CurrentInventoryComponent } from './currentInventory/currentInventory.component'


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
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