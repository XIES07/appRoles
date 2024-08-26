import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from 'src/app/core/models/ngrx.models';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { selectAuthUser } from 'src/app/core/state/auth/auth.selectors';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {

  user$: Observable<UserModel>

  constructor(private store:Store<AppState>){
    this.user$ = this.store.select(selectAuthUser)
  }

}
