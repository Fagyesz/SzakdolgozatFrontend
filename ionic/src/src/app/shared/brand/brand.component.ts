import {Component, OnInit} from '@angular/core'
import {MenuController} from "@ionic/angular"

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements OnInit {
  #sidebar: HTMLIonMenuElement = null

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.get("sidebar").then(res => this.#sidebar = res)
  }

  openSidebar() {
    this.menu.open(this.#sidebar.menuId)
  }

}
