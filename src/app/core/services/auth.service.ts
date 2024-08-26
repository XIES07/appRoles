import { Injectable } from '@angular/core';
import * as DataUser from '../../data/users.data'
import { UserModel } from '../models/user.model';
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


  login(token: string) {

    const foundUser = DataUser.InitialUsers.find(user => user.token === token)

    if (!foundUser) {
      alert('user not found');
      return of(DataUser.unidentifiedUser);
    }

    localStorage.setItem('token', token);
    this.router.navigateByUrl('/home');
    return of(foundUser);

  }

  loadUserFromToken(): UserModel {
    const token = localStorage.getItem('token');

    if (!token) {
      return DataUser.unidentifiedUser;
    }

    const foundUser = DataUser.InitialUsers.find(user => user.token === token) as UserModel;

    if (!foundUser) {
      return DataUser.unidentifiedUser;
    }

    return foundUser;
  }

}
