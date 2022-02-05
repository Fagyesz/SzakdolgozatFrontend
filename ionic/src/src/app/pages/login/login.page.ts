import {Component, Input, OnInit} from '@angular/core'
import {AccountService} from "../../services/account.service"
import {MessageService} from "primeng/api"
import {RedirectService} from "../../services/redirect.service"
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @Input() email : string = "";
  @Input() password : string = "";
  @Input() remember_me:  boolean = false;
  log: string="";

  constructor(
    private accountService: AccountService,
    private messageService: MessageService,
    private redirect: RedirectService,
    public router:Router
  ) { }

  RedirectToResetPasswordPage()
  {
    this.router.navigateByUrl('/reset-password')
  }

  isChecked(event) {
    if ( event.checked ) {
      this.remember_me = true
    }
  }

  login(){
    try {
      this.loginAuth()
    } catch (err) {
      console.log(err)
    }
  }

  loginAuth(){
    if ( this.email.trim().length !== 0 && this.password.trim().length !== 0) {
      this.accountService.login(this.email, this.password,this.remember_me)
        .then(() => {
          this.messageService.add({severity: 'success', summary: 'Sikeres bejelentkezés!'})
          this.redirect.intendedOr('/timeline', true)
        })
        .catch(() => this.messageService.add({severity: 'error', summary: 'A bejelentkezés nem sikerült!'}))
    }
    else {
      this.log = "Az adatok nem lehetnek üresek"
    }
  }

  ngOnInit() {
    return
  }

}
