import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { ProfilePageRoutingModule } from './profile-routing.module'
import { ProfilePageComponent } from './profile-page.component'
import {SharedModule} from "../../shared/shared.module"
import {InputTextModule} from "primeng/inputtext"

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfilePageRoutingModule,
        SharedModule,
        InputTextModule
    ],
  declarations: [ProfilePageComponent]
})
export class ProfilePageModule {}
