import { Injectable } from '@angular/core';
import { Course } from 'src/app/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_BASE_PATH } from 'src/app/constants';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  public getList(
    start: number = 0,
    count: number = 3,
    textFragment: string = ''
  ): Observable<Course[]> {
    return this.httpClient.get<Course[]>(
      `${API_BASE_PATH}courses?start=${start}&count=${count}&textFragment=${textFragment}`
    );
  }

  public getItemById(courseId: number): Observable<Course> {
    return this.httpClient.get<Course>(`${API_BASE_PATH}courses/${courseId}`);
  }

  public updateItem(data: Course): Observable<Course[]> {
    return this.httpClient.post<Course[]>(
      `${API_BASE_PATH}courses/${data.id}`,
      { data }
    );
  }

  public deleteItem(courseId: number): Observable<Course[]> {
    return this.httpClient.delete<Course[]>(
      `${API_BASE_PATH}courses/${courseId}`
    );
  }

  public createCourse(data: Course): Observable<Course> {
    return this.httpClient.post<Course>(`${API_BASE_PATH}courses`, { data });
  }
}
