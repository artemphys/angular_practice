import { Component, Input } from '@angular/core';
import { Course, CourseData } from 'src/app/interfaces';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements Course {
  @Input()
  item: CourseData;

  constructor() {}
}
