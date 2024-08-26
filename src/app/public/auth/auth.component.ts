import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/models/ngrx.models';
import { loginOn } from 'src/app/core/state/auth/auth.actions';
import { InitialUsers } from 'src/app/data/users.data';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  users = InitialUsers;

  selectedUser: any;
  constructor(private NGRXstore: Store<AppState>) {}

  login() {
    const code = this.selectedUser.token;
    this.NGRXstore.dispatch(loginOn({ code }));
  }
}
