import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './component/view-profile/view-profile.component';
import { EditProfleComponent } from './component/edit-profle/edit-profle.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfleComponent
  ],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
