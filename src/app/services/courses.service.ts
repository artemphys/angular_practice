import { Injectable } from '@angular/core';
import { DATA } from 'src/mocks/courses';
import { CourseData } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  public getAll(): CourseData[] {
    return DATA;
  }
}
