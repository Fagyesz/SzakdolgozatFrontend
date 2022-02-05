import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RoleManagePage } from './role-manage.page'

const routes: Routes = [
  {
    path: '',
    component: RoleManagePage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleManagePageRoutingModule {}
