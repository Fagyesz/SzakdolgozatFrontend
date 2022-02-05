import {Component, OnInit} from '@angular/core'
import {PageService} from "../../services/page.service"
import {AccountService} from "../../services/account.service"
import {ICheck} from "../../interfaces/icheck"
import {IPageRecord} from "../../interfaces/ipagerecord"
import {RedirectService} from "../../services/redirect.service"
import {UserGuard} from "../../auth/user.guard"

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit{
  pages: (IPageRecord)[] = []
  isLoggedIn: boolean = false

  constructor(public pageService: PageService, public account: AccountService, private redirector: RedirectService) { }

  ngOnInit() {
    this.account.waitForInit().then(() => this.initLinks())
    this.initGuard()
  }

  private async initLinks() {
    this.pages = []
    for (const pageRecord of this.pageService.appPages) {
      if (pageRecord.guards) await this.checkGuards(pageRecord)
      else this.pages.push(pageRecord)
    }
  }

  private async checkGuards(pageRecord: IPageRecord) {
    for (const guardClass of pageRecord.guards) {
      const guard = (new (guardClass as any)(this.account)) as ICheck
      if (await guard.check()) this.pages.push(pageRecord)
    }
  }

  private async initGuard() {
    await this.account.waitForInit()
    const guard = new UserGuard(this.account, this.redirector)
    this.isLoggedIn = await guard.check()
  }
}
