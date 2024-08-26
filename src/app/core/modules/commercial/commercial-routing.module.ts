import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SalesComponent } from './components/sales/sales.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'sales', component: SalesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommercialRoutingModule {}
