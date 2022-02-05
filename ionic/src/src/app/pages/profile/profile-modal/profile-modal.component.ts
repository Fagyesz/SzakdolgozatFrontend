import {Component, Input, OnInit} from '@angular/core'
import {ModalController} from "@ionic/angular"
import {AccountService} from "../../../services/account.service"

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements OnInit {

  @Input() id: string

  constructor(private modalController: ModalController, private account: AccountService) { }

  ngOnInit() {
    return
  }

  close() {
    this.modalController.dismiss()
  }

  deleteUser() {
    this.account.deleteUser(this.id)
  }

}
