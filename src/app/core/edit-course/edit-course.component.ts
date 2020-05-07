import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
  @Input() course = {
    id: '',
    title: '',
    description: '',
    creation_date: '',
    duration: 0,
    topRated: false,
    authors: '',
  };
  @Input() date = new FormControl(new Date());

  private courseId = null;
  minDate = new Date();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');

    if (!this.courseId) {
      return;
    }

    this.course = this.coursesService.getItemById(this.courseId);
    this.date = new FormControl(new Date(this.course.creation_date));
  }

  public onSave(): void {
    const data = {
      ...this.course,
      creation_date: this.date.value,
    };

    this.courseId
      ? this.coursesService.updateItem(data)
      : this.coursesService.createCourse(data);

    this.router.navigate(['/courses']);
  }

  public onCancel(): void {
    this.router.navigate(['/courses']);
  }
}
