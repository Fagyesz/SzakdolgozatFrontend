import {Injectable} from '@angular/core'
import {RestService} from './rest.service'
import {IToken} from '../interfaces/itoken.interface'
import {StorageService} from "./storage.service"
import {IUser} from "../interfaces/iuser.interface"

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  #ready: boolean = false
  #token: IToken = null
  #user: IUser
  get user(): IUser {
    return this.#user
  }

  get isLoggedIn(): boolean {
    return !!(this.#token)
  }

  constructor(private restService: RestService, private storage: StorageService) {
      Promise.all([
        this.storage.get<IToken>('token_object').then(res => Date.parse(res?.expires_at)?.valueOf() > Date.now() ? this.#token = res : null),
        this.storage.get<IUser>('user').then(res => this.#user = res)
      ]).then(() => this.#ready = true)
  }

   async login(email: string, password: string, remember_me: boolean = false): Promise<void> {
      await this.restService.post<IToken>("auth/login", {
        "email": email,
        "password": password,
        "remember_me": remember_me
      },{}, {
        'X-AppMeta': 'NO-AUTH'
      }).toPromise()
        .then(res => {
        this.storage.set('token', `${res.token_type} ${res.access_token}`)
        this.storage.set('token_object', res)
        this.storage.set('token_expires_at', res.expires_at)
        this.#token = res
        console.log('Token set: ', this.#token)
      })
     await this.getProfile().then(user => {
       this.storage.set('user', user)
       this.#user = user
     })
  }

  register = (name: string, email:string, password: string) => this.restService.post<object>('auth/register', {
    "name": name,
    "email": email,
    "password": password
  });

  logout = () => Promise.all([
    this.storage.remove('user'),
    this.storage.remove('token'),
    this.storage.remove('token_object'),
    this.storage.remove('token_expires_at'),
    () => this.#token = null,
    () => this.#user = null,
    this.deleteAllCookies(),
    this.restService.get<object>('auth/logout')
  ]);

  deleteAllCookies() {
    const cookies = document.cookie.split(";")

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i]
      const eqPos = cookie.indexOf("=")
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }
    return true
  }

  resetPassword = (old_password: string, new_password: string) => this.isLoggedIn
  ? this.restService.post('profile/reset_password', {
    "token": this.#token,
    "old_password": old_password,
    "new_password": new_password
  })
  : null;

  forgotPassword = (email: string) => this.restService.post('forgot_password', {"email": email});

  getProfile = async () => this.restService.get<IUser>('auth/profile').toPromise();

  updateProfile = (user: IUser) => this.restService.put<object | null>(`users/${user.id}`, user);

  deleteUser = (id: string) => this.restService.delete<object | null>(`users/${id}`);

  async waitForInit() {
    while(!this.#ready) // define the condition as you like
      await new Promise(resolve => setTimeout(resolve, 250))
  }
}
