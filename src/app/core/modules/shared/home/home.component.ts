import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/models/ngrx.models';
import { UserModel } from 'src/app/core/models/user.model';
import { selectAuthUser } from 'src/app/core/state/auth/auth.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  user$: Observable<UserModel>

 constructor(private store: Store<AppState>){
  this.user$ = this.store.select(selectAuthUser)
 }
}
