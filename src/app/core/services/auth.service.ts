import { Injectable } from '@angular/core';
import * as DataUser from '../../data/users.data'
import { InitialUsers, UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user: UserModel;

  constructor(private router: Router) {
    this.user = DataUser.unidentifiedUser
  }


  login(userRole: string) {

    const foundUser = InitialUsers.find(user => user.code === userRole)

    if (!foundUser) {
      alert('user not found');
      return of(DataUser.unidentifiedUser);
    }

    this.router.navigateByUrl('/home')

    switch (userRole) {
      case 'su':
        localStorage.setItem('user', JSON.stringify(DataUser.superUser1));
        return of(DataUser.superUser1);

      case 'admin':
        localStorage.setItem('user', JSON.stringify(DataUser.admin1));
        return of(DataUser.admin1);

      case 'seller1':
        localStorage.setItem('user', JSON.stringify(DataUser.seller1));
        return of(DataUser.seller1);

      case 'seller2':
        localStorage.setItem('user', JSON.stringify(DataUser.seller2));
        return of(DataUser.seller2);

      case 'counter1':
        localStorage.setItem('user', JSON.stringify(DataUser.counter1));
        return of(DataUser.counter1);

      case 'client1':
        localStorage.setItem('user', JSON.stringify(DataUser.client1));
        return of(DataUser.client1);

      default:
        alert('this rol is not valid');
        return of(DataUser.unidentifiedUser);

    }
  }


}
