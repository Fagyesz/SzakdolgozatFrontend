import {TestBed, waitForAsync} from '@angular/core/testing'
import {HttpClientTestingModule} from "@angular/common/http/testing"

import { ManagerService } from './manager.service'
import {IonicStorageModule} from "@ionic/storage-angular"

describe('ManagerService', () => {
  let service: ManagerService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, IonicStorageModule.forRoot()]
    })
    service = TestBed.inject(ManagerService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should get servers', () => {
    let servers = []
    waitForAsync(() => {
      service.getServers().subscribe(res => servers = res)
    })
    expect(servers).toBeDefined()
  })
})
