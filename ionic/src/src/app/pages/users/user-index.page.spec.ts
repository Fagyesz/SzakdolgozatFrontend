import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { UserIndexPage } from './user-index.page'
import {HttpClientTestingModule} from "@angular/common/http/testing"
import {IonicStorageModule} from "@ionic/storage-angular"
import {RouterTestingModule} from "@angular/router/testing"
import {ConfirmationService, MessageService} from "primeng/api"

describe('UserIndexPage', () => {
  let component: UserIndexPage
  let fixture: ComponentFixture<UserIndexPage>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIndexPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, IonicStorageModule.forRoot(), RouterTestingModule],
      providers: [MessageService, ConfirmationService]
    }).compileComponents()

    fixture = TestBed.createComponent(UserIndexPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
