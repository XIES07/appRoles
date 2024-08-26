import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfleComponent } from './component/edit-profle/edit-profle.component';
import { ViewProfileComponent } from './component/view-profile/view-profile.component';

const routes: Routes = [ 
  { path: 'edit-profile', component: EditProfleComponent },
  { path: 'view-profile', component: ViewProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
