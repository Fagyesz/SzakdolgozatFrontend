import { Injectable } from '@angular/core'
import {Itenant} from "../interfaces/itenant.interface"
import {Observable} from "rxjs"
import {IPaginate} from "../interfaces/ipaginate.interface"
import {RestService} from "./rest.service"

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private restService: RestService) { }

  getTenants(): Observable<IPaginate<Itenant>> {
    return this.restService.get('tenants',{'no_tenant': 'true'})
  }
}
