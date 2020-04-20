import { Injectable } from '@angular/core';
import { DATA } from 'src/mocks/courses';
import { Course } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  public getAll(): Course[] {
    return DATA;
  }
}
