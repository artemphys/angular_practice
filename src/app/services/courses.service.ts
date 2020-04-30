import { Injectable } from '@angular/core';
import { DATA } from 'src/mocks/courses';
import { Course } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  public data = DATA;
  constructor() {}

  public getList(): Course[] {
    return this.data;
  }

  public createCourse(newItem: Course): Course[] {
    return DATA;
  }

  public getItemById(itemId: string): Course {
    return DATA.find(({ id }) => id === itemId);
  }

  public updateItem(updatedData: Course): void {
    const idx = this.data.findIndex(({ id }) => id === updatedData.id);

    this.data[idx] = { ...this.data[idx], ...updatedData };
  }

  public removeItem(itemId: string): void {
    this.data = this.data.filter(({ id }) => id !== itemId);
  }
}
