import { Component, OnInit } from '@angular/core'
import {HOME, RedirectService} from "../../../services/redirect.service"
import {AccountService} from "../../../services/account.service"
import {MessageService} from "primeng/api"

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  constructor(
    private redirect: RedirectService,
    private account: AccountService,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.account.logout().then(() => {
      this.message.add({summary: 'Kijelentkezve', severity: 'warning'})
      window.history.forward()
      this.redirect.to(HOME, true)
    })
  }

}
