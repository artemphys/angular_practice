import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { CourseData, Courses } from 'src/app/interfaces';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements Courses {
  items: CourseData[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.items = this.coursesService.getAll();
  }
}
