import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course, Courses } from 'src/app/interfaces';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements Courses {
  public items: Course[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.items = this.coursesService.getAll();
  }
}
