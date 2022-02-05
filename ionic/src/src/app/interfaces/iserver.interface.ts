import {IUser} from "./iuser.interface"
import {IService} from "./iservice.interface"

export interface IServer extends IUser{
  services: IService[]
}
