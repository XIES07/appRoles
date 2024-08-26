import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelSuperUserComponent } from './components/panel-super-user/panel-super-user.component';
import { SuperUserRoutingModule } from './super-user-routing.module';

@NgModule({
  declarations: [
    PanelSuperUserComponent
  ],
  imports: [CommonModule, SuperUserRoutingModule],
})
export class SuperUserModule {}
