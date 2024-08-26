import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MenubarComponent } from './menubar/menubar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';

import { FormsModule } from '@angular/forms';



const componentsPublic = [
  MenubarComponent,
  FooterComponent,
  AuthComponent
] 

const primengPublicModules = [
  MenubarModule,
  ButtonModule,
  DropdownModule,
]

@NgModule({
  declarations: [...componentsPublic],
  imports: [CommonModule,FormsModule, ...primengPublicModules],
  exports: [...componentsPublic, ...primengPublicModules],
})
export class PublicModule {}
