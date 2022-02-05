import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { RegisterPageRoutingModule } from './register-routing.module'

import { RegisterPageComponent } from './register-page.component'
import {SharedModule} from "../../shared/shared.module"
import {InputTextModule} from "primeng/inputtext"
import {PasswordModule} from "primeng/password"


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RegisterPageRoutingModule,
    InputTextModule,
    PasswordModule
  ],
    declarations: [RegisterPageComponent]
})
export class RegisterPageModule {}
