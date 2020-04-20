import { Injectable } from '@angular/core';
import { userData } from 'src/mocks/user';
import { User } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  public getUser(): User {
    return userData;
  }
}
