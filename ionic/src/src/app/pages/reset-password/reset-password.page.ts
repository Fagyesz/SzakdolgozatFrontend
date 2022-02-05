import { Component, Input, OnInit } from '@angular/core'
import { MessageService } from 'primeng/api'
import { AccountService } from 'src/app/services/account.service'
import { RedirectService } from 'src/app/services/redirect.service'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  @Input() new_password : string = "";
  old_password : string = "";
  log: string="";

  constructor(
    private accountService: AccountService,
    private messageService: MessageService,
    private redirect: RedirectService
  ) { }


  RedirectToLoginPage()
  {
    this.redirect.to('/login')
  }

  resetPw(){
    try {
      this.resetPwLogic()
    } catch (err) {
      console.log(err)
    }
  }

  resetPwLogic(){
//    if(this.new_password.trim().length !== 0) {
//       this.accountService.resetPassword(this.old_password,this.new_password)
//         .then(() => {
//           this.messageService.add({severity: 'success', summary: 'Sikeres jelszóváltoztás!'})
//         })
//         .catch(() => this.messageService.add({severity: 'error', summary: 'A visszaállítás nem sikerült!'}))
//     }
//     else {
//       this.log = "Az adatok nem lehetnek üresek"
//     }
  }

  ngOnInit() {
    return
  }

}
