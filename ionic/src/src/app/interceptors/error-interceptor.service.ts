import {Injectable} from "@angular/core"
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http"
import {Router} from "@angular/router"
import {Observable, of, throwError} from "rxjs"
import {catchError} from "rxjs/operators"
import {StorageService} from "../services/storage.service"
import {fromPromise} from "rxjs/internal-compatibility"
import {RedirectService} from "../services/redirect.service"

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private storage: StorageService, private redirect: RedirectService) { }

  private handleError(err: HttpErrorResponse): Observable<any> {
    switch (err.status) {
      case 401:
        // noinspection JSIgnoredPromiseFromCall
        this.redirect.push(window.location.href)
        this.redirect.to('/login')
        break
      case 422:
      default:
        return throwError(err)
    }

    return of(err.message)
  }

  private async handle(next: HttpHandler, req: HttpRequest<any>){
    let token: string = null
    if (!req.headers.get('X-AppMeta')?.split(',').includes('NO-AUTH')) {
      await this.storage.waitForStorage()
      token = await this.storage.get<string>('token') ?? null
    }
    const authReq = req.clone( token ? {headers: req.headers.set('Authorization', token)} : {})

    return next.handle(authReq).pipe(catchError(x => this.handleError(x))).toPromise()
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return fromPromise(this.handle(next, req))
  }
}
