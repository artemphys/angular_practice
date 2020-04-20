import { Component, Input } from '@angular/core';
import { Course, CourseItem } from 'src/app/interfaces';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements CourseItem {
  @Input()
  public item: Course;

  constructor() {}

  ngOnInit(): void {}
}
