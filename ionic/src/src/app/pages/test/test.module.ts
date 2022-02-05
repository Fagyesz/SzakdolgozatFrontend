import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { TestPageRoutingModule } from './test-routing.module'

import { TestPage } from './test.page'
import {TranslateModule} from "@ngx-translate/core"
import {InputTextModule} from "primeng/inputtext"

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TestPageRoutingModule,
        TranslateModule,
        InputTextModule
    ],
  declarations: [TestPage]
})
export class TestPageModule {}
