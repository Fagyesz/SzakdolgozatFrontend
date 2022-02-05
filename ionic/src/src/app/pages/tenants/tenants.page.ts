import { Component, OnInit } from '@angular/core'
import {TenantService} from "../../services/tenant.service"
import {Itenant} from "../../interfaces/itenant.interface"

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.page.html',
  styleUrls: ['./tenants.page.scss'],
})
export class TenantsPage implements OnInit {

  tenants: Itenant[] = []
  selectedTenant: Itenant

  constructor(private tenantService: TenantService) { }

  ngOnInit() {
    this.tenantService.getTenants().subscribe(res => {
      this.tenants = res['data']
      console.log(this.tenants)
    })
  }

  selectTenant(tenant: Itenant) {
    this.selectedTenant = tenant
  }

}
