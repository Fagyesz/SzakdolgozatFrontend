import {Component, Input} from '@angular/core'
import { AccountService } from "../../services/account.service"
import {MessageService} from "primeng/api"
import {Router} from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.page.component.html',
  styleUrls: ['./register.page.component.scss'],
})
export class RegisterPageComponent {

  @Input() name : string = "";
  @Input() email : string = "";
  @Input() password : string = "";
  @Input() password_confirmation: string = "";
  @Input() read_me:  boolean = false;
  log: string="";


  constructor(private accountService: AccountService,
              private messageService: MessageService,
              private route: Router) {}

  isChecked(event) {
    if ( event.checked ) {
      this.read_me = true
    }
  }
  register(){
    try {
      this.registrationLogic()
    }
    catch (err){
      console.log(err)
    }
  }

  private registrationLogic() {
    if (this.name.trim().length !== 0 && this.email.trim().length !== 0 && this.password.trim().length !== 0) {
      if (this.read_me) {
        if (this.password === this.password_confirmation) {
          this.accountService.register(this.name, this.email, this.password)
            .subscribe(
              () => {
                this.messageService.add({severity: 'success', summary: 'Sikeres regisztráció!'})
                this.route.navigateByUrl('/login')},
              () => {this.messageService.add({severity: 'error', summary: 'Sikertelen regisztráció!'})})
        } else {
          this.log = "A két jelszó nem egyezik"
        }
      } else {
        this.log = "El kell fogadnod a felhasználási feltételeket."
      }
    } else {
      this.log = "Az adatok nem lehetnek üresek"
    }
  }
}
