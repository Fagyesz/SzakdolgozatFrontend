import { Injectable } from '@angular/core'
import { GuestGuard } from '../auth/guest.guard'
import { UserGuard } from "../auth/user.guard"
import {IPageRecord} from "../interfaces/ipagerecord"

@Injectable({
  providedIn: 'root'
})
export class PageService {
  get appPages(){
    return this.#appPages
  }

  #appPages: IPageRecord[] = [
    { title: 'Bejelentkezés', url: '/login', guards: [GuestGuard] },
    { title: 'Regisztráció', url: '/register', guards: [GuestGuard] },
    { title: 'Profil', url: '/profile', guards: [UserGuard] },
    { title: 'Kijelentkezés', url: '/auth/logout', guards: [UserGuard] }
  ];

  constructor() { }
}
