import { Component, OnInit } from '@angular/core'
import {AccountService} from "../../services/account.service"

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  value: string = "TEST!"

  constructor(private account: AccountService) { }

  ngOnInit() {
    return
  }

  asd() {
    this.account.getProfile().then(res => console.log(res))
  }
}
