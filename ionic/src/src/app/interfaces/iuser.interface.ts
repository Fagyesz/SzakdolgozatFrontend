// import { IService } from './iservice.interface'

import { IDates } from './idates.interface'
import { IRole } from './irole.interface'
import { IImage } from './iimage.interface'

export interface IUser extends IDates {
  id: string
  name: string
  email: string
  email_verified_at: string //TODO: DateTime
  extra?: object
  troll: boolean
  is_server: boolean
  // services?: IService[]
  roles?: IRole[]
  images: IImage[]
}
