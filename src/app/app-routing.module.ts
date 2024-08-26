import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { AuthComponent } from './public/auth/auth.component';
import { HomeComponent } from './core/modules/shared/home/home.component';
import { IsLoggedInGuard } from './core/guards/is-logged-in.guard';
import { logeddGuard } from './core/guards/loged-guard.guard';
import { HasRoleGuard } from './core/guards/has-role.guard';

const routes: Routes = [
  { path: 'auth', component: AuthComponent, canActivate: [logeddGuard] },
  { path: 'home', component: HomeComponent, canActivate: [IsLoggedInGuard] },
  {
    path: 'accounting',
    canActivate: [IsLoggedInGuard, HasRoleGuard],
    canLoad:[HasRoleGuard],
    data:{
      allowedRoles: ['accounting']
    },
    loadChildren: () => import('./core/modules/accounting/accounting.module').then(m => m.AccountingModule),
  },
  {
    path: 'administrator',
    canActivate: [IsLoggedInGuard, HasRoleGuard],
    canLoad:[HasRoleGuard],
    data:{
      allowedRoles: ['administrator']
    },
    loadChildren: () => import('./core/modules/administrator/administrator.module').then(m => m.AdministratorModule),
  },
  {
    path: 'commercial',
    canActivate: [IsLoggedInGuard, HasRoleGuard],
    canLoad:[HasRoleGuard],
    data:{
      allowedRoles: ['commercial']
    },
    loadChildren: () => import('./core/modules/commercial/commercial.module').then(m => m.CommercialModule),
  },
  {
    path: 'products',
    canActivate: [IsLoggedInGuard, HasRoleGuard],
    canLoad:[HasRoleGuard],
    data:{
      allowedRoles: ['products']
    },
    loadChildren: () => import('./core/modules/products/products.module').then(m => m.ProductsModule),
  },
  {
    path: 'profile',
    canActivate: [IsLoggedInGuard, HasRoleGuard],
    canLoad:[HasRoleGuard],
    data:{
      allowedRoles: ['profile']
    },
    loadChildren: () => import('./core/modules/profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'super-user',
    canActivate: [IsLoggedInGuard, HasRoleGuard],
    canLoad:[HasRoleGuard],
    data:{
      allowedRoles: ['superUser']
    },
    loadChildren: () => import('./core/modules/super-user/super-user.module').then(m => m.SuperUserModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
