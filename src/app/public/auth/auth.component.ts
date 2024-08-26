import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/models/ngrx.models';
import { InitialUsers } from 'src/app/core/models/user.model';
import { loginOn } from 'src/app/core/state/auth/auth.actions';

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
    const code = this.selectedUser.code;
    this.NGRXstore.dispatch(loginOn({ code }));
  }
}
