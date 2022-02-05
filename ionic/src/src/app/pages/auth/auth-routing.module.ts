import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {UserGuard} from "../../auth/user.guard"

const routes: Routes = [
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then(m => m.LogoutPageModule),
    canActivate: [UserGuard]   
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
