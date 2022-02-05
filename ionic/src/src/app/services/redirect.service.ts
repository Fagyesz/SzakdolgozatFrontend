import { Injectable } from '@angular/core'
import {Router} from "@angular/router"
import {Location} from "@angular/common"

export const HOME = '/'

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(
    private router: Router,
    private location: Location
  ) {
  }

  #urls: string[] = []
  get next(){
    return this.#urls[this.#urls.length - 1]
  }

  push(url: string) {
    this.#urls.push(url)
  }

  login() {
    return this.router.parseUrl('/login')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  to(url: string, extra: any = {}, hardJump = false, callback = r => {}) {
    if (hardJump) window.location.replace(url)
    else this.router.navigateByUrl(url, {state: extra}).then(r => callback(r))
  }

  intendedOr(defaultTarget: string = HOME, hardJump = false) {
    const url = this.#urls.pop() ?? defaultTarget
    if (hardJump) window.location.replace(url)
    else this.router.navigateByUrl(url)
  }

  back() {
    return this.location.back()
  }
}
