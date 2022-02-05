import { Injectable } from '@angular/core'
import {RestService} from "./rest.service"
import {IUser} from "../interfaces/iuser.interface"
import {IPaginate} from "../interfaces/ipaginate.interface"
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //region Empty User
  static readonly emptyUser: IUser = {
    id: "",
    name: "",
    email: "",
    created_at: "",
    updated_at: "",
    extra: {
      phone_number: "",
      country: "",
      postal_code: "",
      city: "",
      street: "",
      house_number: ""
    },
    email_verified_at: "",
    troll: false,
    is_server: false,
    images: []
  }
  //endregion

  constructor(private restService: RestService) { }

  getUsers(page: number = 1, searchQuery: string = ''): Observable<IPaginate<IUser>> {
    return this.restService.get<IPaginate<IUser>>('users', {page: page, search: searchQuery})
  }

  getUser(id: string): Observable<IUser> {
    return this.restService.get<IUser>(`users/${id}`)
  }

  setTroll(user: IUser) {
    return this.restService.post<object|null>(`troll/${user.id}`, {troll: user.troll})
  }

  deleteUser(id: string) {
    return this.restService.delete<object|null>(`users/${id}`)
  }

  editUser(user: IUser) {
    return this.restService.put<object|null>(`users/${user.id}`, user)
  }
}
