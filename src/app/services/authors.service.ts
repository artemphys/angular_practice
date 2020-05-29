import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../interfaces';
import { API_BASE_PATH } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private httpClient: HttpClient) {}

  public getList(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(`${API_BASE_PATH}authors`);
  }
}
