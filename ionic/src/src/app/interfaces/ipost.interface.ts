import {IImage} from "./iimage.interface"
import {IDates} from "./idates.interface"

export interface IPost extends IDates{
  id: string
  title: string
  content: string
  images: IImage[]
}
