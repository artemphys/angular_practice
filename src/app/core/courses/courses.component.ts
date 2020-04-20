import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/interfaces';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  items: Course[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.items = this.coursesService.getAll();
  }
}
