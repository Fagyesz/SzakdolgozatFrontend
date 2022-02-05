import { Injectable } from '@angular/core'
import { RestService } from './rest.service'
import { IUser } from '../interfaces/iuser.interface'
import {IServer} from "../interfaces/iserver.interface"

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private rest: RestService) { }

  getAssistants() {
    return this.rest.get<IUser[]>('role', {q: 'assistant'})
  }

  getServers() {
    return this.rest.get<IServer[]>('role', {q: 'server'})
  }

  getServer(server: IUser) {
    return this.rest.get<any>(`server/${server.id}`)
  }

  assign(user: IUser, role: string) {
    return this.rest.post<object|null>(`role/${user.id}/${role}`)
  }

  revoke(user: IUser, role: string) {
    return this.rest.delete<object|null>(`role/${user.id}/${role}`)
  }
}
