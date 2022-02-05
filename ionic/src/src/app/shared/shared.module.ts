import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {HeaderComponent} from "./header/header.component"
import {BrandComponent} from "./brand/brand.component"
import {FloatingInputComponent} from "./floating-input/floating-input.component"
import {SidebarComponent} from "./sidebar/sidebar.component"
import {TitleComponent} from "./title/title.component"
import {IonicModule} from "@ionic/angular"
import {BackButtonHeaderComponent} from "./back-button-header/back-button-header.component"
import {BackButtonComponent} from "./back-button-header/back-button/back-button.component"


@NgModule({
  declarations: [HeaderComponent, BrandComponent, FloatingInputComponent, SidebarComponent, TitleComponent, BackButtonHeaderComponent, BackButtonComponent],
  exports: [HeaderComponent, BrandComponent, FloatingInputComponent, SidebarComponent, TitleComponent, BackButtonHeaderComponent, BackButtonComponent],
  imports: [
        CommonModule,
        IonicModule
    ]
})
export class SharedModule { }
