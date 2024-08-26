import { PanelSuperUserComponent } from './components/panel-super-user/panel-super-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'panel-super-user', component: PanelSuperUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperUserRoutingModule {}
