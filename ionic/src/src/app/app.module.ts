import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {Router, RouteReuseStrategy} from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from "@angular/forms"
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http"
import {IonicStorageModule} from "@ionic/storage-angular"
import {StorageService} from "./services/storage.service"
import {ErrorInterceptor} from "./interceptors/error-interceptor.service"
import {AccountService} from "./services/account.service"
import {SharedModule} from "./shared/shared.module"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {TranslateLoader, TranslateModule, TranslatePipe} from "@ngx-translate/core"
import {TranslateHttpLoader} from "@ngx-translate/http-loader"
import {EmailComposer} from "@ionic-native/email-composer/ngx"
import {UserService} from "./services/user.service"
import {ConfirmationService, MessageService} from "primeng/api"
import {ToastModule} from "primeng/toast"
import {ConfirmDialogModule} from "primeng/confirmdialog"
import {DatePipe} from "@angular/common"
import {EditorModule} from "primeng/editor"
import {RedirectService} from "./services/redirect.service"

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule, SharedModule, BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      defaultLanguage: 'hu'
    }), ToastModule, ConfirmDialogModule
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    StorageService,
    MessageService,
    UserService,
    ConfirmationService,
    RedirectService,
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: (router: Router, storage: StorageService, redirect: RedirectService) => new ErrorInterceptor(router, storage, redirect),
      multi: true,
      deps: [Router, StorageService, RedirectService]
    },
    EmailComposer,
    TranslatePipe,
    DatePipe,
    EditorModule,
    AccountService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
