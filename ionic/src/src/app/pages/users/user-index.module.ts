import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { UserIndexPageRoutingModule } from './user-index-routing.module'
import { UserIndexPage } from './user-index.page'
import { SharedModule } from '../../shared/shared.module'
import { TableModule } from 'primeng/table'
import { InputTextModule } from 'primeng/inputtext'
import { PipeModule } from '../../pipes/pipe.module'
import { TranslateModule } from '@ngx-translate/core'
import { MultiSelectModule } from 'primeng/multiselect'
import { ToggleButtonModule } from 'primeng/togglebutton'
import {ButtonModule} from "primeng/button"


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserIndexPageRoutingModule,
    SharedModule,
    TableModule,
    InputTextModule,
    PipeModule,
    TranslateModule,
    MultiSelectModule,
    ToggleButtonModule,
    ButtonModule
  ],
  declarations: [UserIndexPage]
})
export class UserIndexPageModule {}
