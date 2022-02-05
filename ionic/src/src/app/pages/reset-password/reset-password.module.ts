import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { ResetPasswordPageRoutingModule } from './reset-password-routing.module'

import { ResetPasswordPage } from './reset-password.page'
import { PasswordModule } from 'primeng/password'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswordPageRoutingModule,
    PasswordModule

  ],
  declarations: [ResetPasswordPage]
})
export class ResetPasswordPageModule {}
