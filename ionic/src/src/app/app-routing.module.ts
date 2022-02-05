import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import {UserGuard} from "./auth/user.guard"
import {GuestGuard} from "./auth/guest.guard"
import {StaffGuard} from "./auth/staff.guard"

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/test/test.module').then(m => m.TestPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [UserGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [GuestGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [GuestGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/user-index.module').then(m => m.UserIndexPageModule),
    canActivate: [StaffGuard]
  },
  {

    path: 'roles',
    loadChildren: () => import('./pages/roles/role-manage/role-manage.module').then( m => m.RoleManagePageModule),
    canActivate: [StaffGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule),
    canActivate: [GuestGuard]
  },
  {
    path: 'tenants',
    loadChildren: () => import('./pages/tenants/tenants.module').then( m => m.TenantsPageModule),
    canActivate: [StaffGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundPageModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
