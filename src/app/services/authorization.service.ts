import { Injectable } from '@angular/core';
import { userData } from 'src/mocks/user';
import { User } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor() {}

  public logIn(user: User): void {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  public logOut(): void {
    sessionStorage.clear();
  }

  public isAuthenticated(): boolean {
    return !!sessionStorage.getItem('user');
  }

  public getUserInfo(): User {
    return userData;
  }
}
