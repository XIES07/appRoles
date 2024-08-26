import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelControlComponent } from './components/panel-control/panel-control.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

const routes: Routes = [
  { path: 'panel-control', component: PanelControlComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'create-product', component: CreateProductComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorRoutingModule {}
