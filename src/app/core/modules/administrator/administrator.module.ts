import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelControlComponent } from './components/panel-control/panel-control.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { AdministratorRoutingModule } from './administrator-routing.module';

@NgModule({
  declarations: [
  
    PanelControlComponent,
      CreateUserComponent,
      CreateProductComponent
  ],
  imports: [CommonModule, AdministratorRoutingModule ],
})
export class AdministratorModule {}
