import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PayrollComponent } from './components/payroll/payroll.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  { path: 'payroll', component: PayrollComponent },
  { path: 'reports', component: ReportsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountingRoutingModule { }
