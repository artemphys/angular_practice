import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

import { CoursesService } from '../../services/courses.service';
import { AuthorsService } from '../../services/authors.service';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';
import { Author } from '../../interfaces';

const authorsValidator = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    return !control.value.length ? { empty: true } : null;
  };
};

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription();
  public form: FormGroup;
  private courseId = null;
  authorsList: Author[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    private authorsService: AuthorsService,
    private breadcrumbsService: BreadcrumbsService,
    fb: FormBuilder
  ) {
    this.form = fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      creationDate: [new Date(), Validators.required],
      duration: [0, Validators.required],
      topRated: [false],
      authors: [[], [authorsValidator()]],
    });
  }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');

    this.subscription.add(
      this.authorsService
        .getList()
        .subscribe((authors) => (this.authorsList = authors))
    );

    if (!this.courseId) {
      this.breadcrumbsService.set(['courses', 'New course']);
      return;
    }

    this.subscription.add(
      this.coursesService
        .getItemById(this.courseId)
        .subscribe(
          ({
            title,
            description,
            creationDate,
            duration,
            topRated,
            authors,
          }) => {
            this.form.patchValue({
              title,
              description,
              creationDate,
              duration,
              topRated,
              authors,
            });

            this.breadcrumbsService.set(['courses', title]);
          }
        )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onFormSubmit(): void {
    if (this.form.valid) {
      this.onSave();
    }
  }

  public onSave(): void {
    const data = {
      ...this.form.value,
    };

    this.courseId ? this.updateCourse(data) : this.createCourse(data);
  }

  public updateCourse(data): void {
    this.subscription.add(
      this.coursesService
        .updateItem({ ...data, id: this.courseId })
        .subscribe(() => {
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
