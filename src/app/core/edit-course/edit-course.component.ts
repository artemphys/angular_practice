import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CoursesService } from '../../services/courses.service';
import { Course } from '../../interfaces';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription();
  @Input() course: Course = {
    id: 0,
    title: '',
    description: '',
    creationDate: '',
    duration: 0,
    topRated: false,
    authors: [], // TODO: Create authors Component
  };
  @Input() authors = '';
  @Input() date = new FormControl(new Date());

  private courseId = null;
  minDate = new Date();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    private breadcrumbsService: BreadcrumbsService
  ) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');

    if (!this.courseId) {
      this.breadcrumbsService.set(['courses', 'New course']);
      return;
    }

    this.subscription.add(
      this.coursesService.getItemById(this.courseId).subscribe((course) => {
        this.course = course;
        this.date = new FormControl(new Date(course.creationDate));

        this.breadcrumbsService.set(['courses', course.title]);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onSave(): void {
    const data = {
      ...this.course,
      creationDate: this.date.value,
    };

    this.courseId ? this.updateCourse(data) : this.createCourse(data);
  }

  public updateCourse(data): void {
    this.subscription.add(
      this.coursesService.updateItem(data).subscribe(() => {
        this.router.navigate(['/courses']);
      })
    );
  }

  public createCourse(data): void {
    this.subscription.add(
      this.coursesService.createCourse(data).subscribe(() => {
        this.router.navigate(['/courses']);
      })
    );
  }

  public onCancel(): void {
    this.router.navigate(['/courses']);
  }
}
