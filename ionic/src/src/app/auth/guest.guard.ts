import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router'
import {Observable} from 'rxjs'
import {AccountService} from "../services/account.service"
import {RedirectService} from "../services/redirect.service"
import {ICheck} from "../interfaces/icheck"

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate, ICheck {

  constructor(
    private account: AccountService,
    private redirect: RedirectService,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    return this.logic(state.url)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async logic(url: string) {
    if (await this.check()) return true
    //this.redirect.back()
    console.log("Guest guard failed: ", this.account.user)
    return false
  }

  async check() {
    await this.account.waitForInit()
    return !this.account.isLoggedIn
  }
}
