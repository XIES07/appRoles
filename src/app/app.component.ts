import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './core/models/ngrx.models';
import { browserReloaded } from './core/state/browser-reloaded';
import { UserModel } from './core/models/user.model';
import { unidentifiedUser } from './data/users.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  user: UserModel = unidentifiedUser;

  title = 'appRoles';
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadUserFromLocalStorage();
    this.store.dispatch(browserReloaded({ user: this.user }))
  }

  loadUserFromLocalStorage() {
    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData) as UserModel
    } else {
      return
    }
  }

}
