import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/interfaces';
import { API_BASE_PATH } from '../constants';
import { Observable } from 'rxjs';

type authData = { token: string };

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private httpClient: HttpClient) {}

  public logIn(login, password): Observable<authData> {
    return this.httpClient.post<authData>(`${API_BASE_PATH}auth/login`, {
      login,
      password,
    });
  }

  public logOut(): void {
    sessionStorage.clear();
  }

  public isAuthenticated(): boolean {
    return !!sessionStorage.getItem('authToken');
  }

  public getUserInfo(): Observable<User> {
    if (!this.isAuthenticated()) {
      return;
    }

    return this.httpClient.post<User>(`${API_BASE_PATH}auth/userinfo`, {});
  }
}
