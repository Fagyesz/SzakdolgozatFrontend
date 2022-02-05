import { Injectable } from '@angular/core'
import { IPost } from '../interfaces/ipost.interface'
import { RestService } from './rest.service'
import { IPaginate } from '../interfaces/ipaginate.interface'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private restService: RestService) { }

  public getPosts(page: number = 1) : Observable<IPaginate<IPost>> {
    return this.restService.get<IPaginate<IPost>>('posts', {per_page: 13, page: page})
  }

  getPost(id: string) {
    return this.restService.get<IPost>(`posts/${id}`)
  }

  deletePost(post: IPost) {
    return this.restService.delete<IPost|null>(`posts/${post.id}`)
  }

  createPost(title: string, content: string) {
    return this.restService.post<object|null>('posts', {title: title, content: content})
  }

  editPost(post: IPost) {
    return this.restService.put<object|null>(`posts/${post.id}`, post)
  }
}
