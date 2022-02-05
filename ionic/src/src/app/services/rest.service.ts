import {Injectable} from '@angular/core'
import {StorageService} from './storage.service'
import {environment} from "../../environments/environment"
import {HttpClient, HttpHeaders} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient, private storage: StorageService) { }

  get = <T>(uri: string, parameters = {}, headers = {}) => this.http.get<T>(
    this.buildUri(uri, parameters),
    { headers: this.buildHeaders(headers) }
  )

  post = <T>(uri: string, body = {}, parameters = {}, headers = {}) =>
    this.http.post<T>(
      this.buildUri(uri, parameters),
      body,
      { headers: this.buildHeaders(headers) }
    )

  put = <T>(uri: string, body = {}, parameters = {}, headers = {}) =>
    this.http.put<T>(
      this.buildUri(uri, parameters),
      body,
      { headers: this.buildHeaders(headers) }
  )

  delete = <T>(uri: string, parameters = {}, headers = {}) =>
    this.http.delete<T>(
      this.buildUri(uri, parameters),
      { headers: this.buildHeaders(headers) }
    )

  buildUri(uri, from = {}){
    if (Object.keys(from).includes('no_tenant')) {
      return `${environment.rest.baseUrl}/${uri}?${Object.keys(from).map(key => `${key}=${encodeURIComponent(from[key])}`).join('&')}`
    }
    return `${environment.rest.baseUrl}/${environment.rest.tenantUri}/${uri}?${Object.keys(from).map(key => `${key}=${encodeURIComponent(from[key])}`).join('&')}`
  }

  buildHeaders(from: {}): HttpHeaders {
    let header = new HttpHeaders({
      ...from,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })

    this.storage?.get('user')?.then(user => {
      if (user){
        header.append('withCredentials', 'true')
        header.append('Authorization', `Bearer ${user.token}`)
      }
    })

    return header

  }
}
