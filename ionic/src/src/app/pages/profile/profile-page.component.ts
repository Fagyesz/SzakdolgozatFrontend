import {Component, OnInit} from '@angular/core'
import { ModalController } from "@ionic/angular"
import { ProfileModalComponent } from "./profile-modal/profile-modal.component"
import {AccountService} from "../../services/account.service"
import {IUser} from "../../interfaces/iuser.interface"
import {StorageService} from "../../services/storage.service"
import {UserService} from "../../services/user.service"
import {ActivatedRoute, Router} from "@angular/router"
import {MessageService} from "primeng/api"


@Component({
  selector: 'app-profile',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit{
  enabled: boolean = false
  sameUser: boolean = false
  userId: string = ''

  user: IUser = UserService.emptyUser

  async ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id') ?? ''
    console.log(this.userId)
    this.user = await this.storage.get<IUser>('user')
    console.log('Data loaded: ',this.user)
    if (this.userId !== '') {
      if (this.user.id !== this.userId) {
        this.userService.getUser(this.userId).subscribe(res => this.user = res) //TODO: Loading animation
        this.sameUser = false
      } else {
        this.sameUser = true
        this.router.navigateByUrl('/profile')
      }
    }
  }

  constructor(public account: AccountService,
              private storage: StorageService,
              private modalController: ModalController,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private messageService: MessageService,
              private router: Router) {
  }

  edit() {
    this.enabled = !this.enabled
  }

  update() {
    if (this.sameUser) {
      this.account.updateProfile(this.user).subscribe(
        () => {
          this.messageService.add({severity: 'success', summary: "Sikeres módosítás!"})
          this.enabled = false
        },
        () => {this.messageService.add({severity: 'error', summary: "Hiba a módosítás során!"})})
      this.storage.remove('user').then(user => console.log(user))
      this.storage.set('user', this.user).then(user => console.log("Added user: ", user))
    } else {
      this.userService.editUser(this.user).subscribe(
        () => {
          this.messageService.add({severity: 'success', summary: "Sikeres módosítás!"})
          this.enabled = false
        },
        () => {this.messageService.add({severity: 'error', summary: "Hiba a módosítás során!"})})
    }
  }

  async openDeleteConfirmation(){
    const modal = await this.modalController.create({
      component: ProfileModalComponent,
      cssClass: 'profile-modal',
      backdropDismiss: true,
      componentProps: {id: this.user.id}
    })
    return await modal.present()
  }
}
