import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { LoginPageRoutingModule } from './login-routing.module'
import { LoginPage } from './login.page'
import {InputTextModule} from "primeng/inputtext"
import {PasswordModule} from "primeng/password"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    InputTextModule,
    PasswordModule
  ],
    declarations: [LoginPage]
})
export class LoginPageModule {}
