import {IDates} from "./idates.interface"

export interface IRole extends IDates{
  id: number
  name: string
  title: string
  level?: number
  scope?: any
  pivot:  {
    entity_id: string
    role_id: number
    entity_type: string
    scope?: any
  }
}
