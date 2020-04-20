import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  @Input() item: Course;

  constructor() {}
  ngOnInit(): void {}
}
