import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './components/reports/reports.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { AccountingRoutingModule } from './accouting-routing.module';

@NgModule({
  declarations: [
    ReportsComponent,
    PayrollComponent
  ],
  imports: [CommonModule, AccountingRoutingModule],
})
export class AccountingModule { }
