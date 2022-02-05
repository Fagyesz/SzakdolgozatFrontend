import {IDates} from "./idates.interface"
import {IUser} from "./iuser.interface"
import {IImage} from "./iimage.interface"

export interface IService extends IDates {
  id: string
  name: string
  description?: string
  duration: number
  extra: object
  user: IUser
  images: IImage[]
}
