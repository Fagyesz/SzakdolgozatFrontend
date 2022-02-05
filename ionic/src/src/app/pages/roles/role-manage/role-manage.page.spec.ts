import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { RoleManagePage } from './role-manage.page'

describe('RoleManagePage', () => {
  let component: RoleManagePage
  let fixture: ComponentFixture<RoleManagePage>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleManagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents()

    fixture = TestBed.createComponent(RoleManagePage)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
