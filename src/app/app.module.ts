import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NGRXImport } from './core/state/app-state';

import { HomeComponent } from './core/modules/shared/home/home.component';

import { PublicModule } from './public/public.module';

import { AccountingModule } from './core/modules/accounting/accounting.module';



const TypeOfUsersModules = [
  AccountingModule
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PublicModule,
    AppRoutingModule,
    TypeOfUsersModules,
    NGRXImport
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
