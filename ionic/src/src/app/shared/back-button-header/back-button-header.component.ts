import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-back-button-header',
  templateUrl: './back-button-header.component.html',
  styleUrls: ['./back-button-header.component.scss'],
})
export class BackButtonHeaderComponent implements OnInit {

  constructor() { }

  @Input() title: string = ""
  @Input() email: string = ""
  @Input() visible: boolean = true

  ngOnInit() {
    return
  }

}
