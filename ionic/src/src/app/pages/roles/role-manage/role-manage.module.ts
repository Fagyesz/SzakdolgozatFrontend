import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { RoleManagePageRoutingModule } from './role-manage-routing.module'

import { RoleManagePage } from './role-manage.page'
import {TableModule} from "primeng/table"
import {InputTextModule} from "primeng/inputtext"
import {MultiSelectModule} from "primeng/multiselect"
import {TranslateModule} from "@ngx-translate/core"
import {ButtonModule} from "primeng/button"

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RoleManagePageRoutingModule,
        TableModule,
        InputTextModule,
        MultiSelectModule,
        TranslateModule,
        ButtonModule
    ],
  declarations: [RoleManagePage]
})
export class RoleManagePageModule {}
