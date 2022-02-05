import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { IUser } from '../../interfaces/iuser.interface'
import {ConfirmationService, Message, MessageService} from "primeng/api"

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.page.html',
  styleUrls: ['./user-index.page.scss'],
})
export class UserIndexPage implements OnInit {
  public query: string
  public page: number = 1
  public users: IUser[] = []
  public loading: boolean
  public roles = ['assistant', 'server', 'superuser']
  public loads = []

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.getUsers()
    this.loading = true
  }

  private getUsers(additionalCall = () => {}) {
    this.userService.getUsers(this.page, this.query).subscribe(res => {
      this.loading = false
      additionalCall()
      return this.users = res.data
    })
  }

  trollClick(user: IUser) {
    const loadSignal = `troll_${user.id}`
    this.loads.push(loadSignal)
    this.userService.setTroll(user).subscribe(() => {
      this.removeLoadSignal(loadSignal, {severity: 'success', summary: 'Adatok frissítve'})
    })
  }


  editClick(user: IUser) {
    console.log(user)
  }


  deleteClick(user: IUser) {
    this.confirmationService.confirm({
      message: `Biztosan törölni szeretné ${user.name} (${user.email}) felhasználóját?`,
      accept: () => {
        const loadSignal = `delete_${user.id}`
        this.loads.push(loadSignal)
        this.userService.deleteUser(user.id).subscribe(() =>
          this.getUsers(() => this.removeLoadSignal(loadSignal, {severity: 'warn', summary: 'Felhasználó törölve'}))
        )
      }
    })
  }
  private removeLoadSignal(loadSignal: string, message: Message) {
    const index = this.loads.indexOf(loadSignal)
    if (index > -1) {
      this.loads.splice(index, 1)
      this.messageService.add(message)
    }
  }
}
