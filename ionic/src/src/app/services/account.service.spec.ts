import {TestBed, waitForAsync} from '@angular/core/testing'

import { AccountService } from './account.service'

describe('AccountService', () => {
  let service: AccountService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AccountService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should not start log in', function () {
    let login
    waitForAsync(() => {
      service.login('','').then(res => login = res)
    })
     expect(login).toBeUndefined()
  })
  it('should not register', function () {
    let register
    waitForAsync(() => {
      service.register('','','').subscribe(res => register = res)
    })
    expect(register).toBeUndefined()
  })
})
