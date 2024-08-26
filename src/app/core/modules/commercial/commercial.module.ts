import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SalesComponent } from './components/sales/sales.component';
import { CommercialRoutingModule } from './commercial-routing.module';

@NgModule({
  declarations: [
    ContactsComponent,
    SalesComponent
  ],
  imports: [CommonModule, CommercialRoutingModule],
})
export class CommercialModule {}
