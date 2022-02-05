import { Component, OnInit } from '@angular/core'
import {ManagerService} from "../../../services/manager.service"
import {IUser} from "../../../interfaces/iuser.interface"
import {MessageService} from "primeng/api"

@Component({
  selector: 'app-role-manage',
  templateUrl: './role-manage.page.html',
  styleUrls: ['./role-manage.page.scss'],
})
export class RoleManagePage implements OnInit {

  staff: IUser[] = []
  staffTemp: IUser[] = []
  roles: string[] = ['assistant', 'server']
  loading: boolean = true

  constructor(private manager: ManagerService, private messageService: MessageService) { }

  ngOnInit() {
    this.getStaff()
  }

  getStaff(){
    this.manager.getAssistants().subscribe(assistants => {
      this.staff = [...assistants, ...this.staff]
    })
    this.manager.getServers().subscribe(servers => {
      this.staff = [...servers, ...this.staff]
      this.staffTemp = this.staff
      this.loading = false
    })
  }

  revoke(current: IUser, role: string) {
    if (this.hasRole(current, role))
      this.manager.revoke(current, role).subscribe(() => {
        this.messageService.add({summary: "Sikeres elvétel", severity: 'success'})
      }, err => {
        this.messageService.add({summary: "Hiba történt az elvételkor: " + err.message, severity: 'danger'})
      })
    else
      this.messageService.add({summary: current.name + "nem egy " + role, severity: 'danger'})
  }

  assign(current: IUser, role: string) {
    if (!this.hasRole(current, role)) {
      this.manager.assign(current, role).subscribe(() => {
        this.messageService.add({summary: "Sikeres hozzáadás", severity: 'success'})
      },err => {
        this.messageService.add({summary: "Hiba történt a hozzáadáskor: " + err.message, severity: 'danger'})
      })
    }
    else
      this.messageService.add({summary: current.name + " már egy " + role, severity: 'danger'})
  }

  hasRole(user: IUser, role: string) : boolean {
    let contains = false
    for (let i = 0; i < user.roles.length; i++) {
      if (user.roles[i].name === role)
        contains = true
    }
    return contains
  }

   filterForRole(roles: string[]) {
    let temp = []
    for (let staff of this.staffTemp)
      for (let role of roles)
        if (this.hasRole(staff, role))
          temp.push(staff)
    this.staff = temp.length !== 0 ? temp : this.staffTemp
    return true
  }
}
