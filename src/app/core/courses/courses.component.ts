import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/interfaces';
import { DeleteCourseModalComponent } from '../delete-course-modal/delete-course-modal.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  @Input() items: Course[] = [];
  public coursesCount: number = 3;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(
    start: number = 0,
    count: number = 3,
    textFragment: string = ''
  ): void {
    this.coursesService
      .getList(start, count, textFragment)
      .subscribe((items) => {
        this.items = items;
      });
  }

  public onEdit(id: string): void {
    console.log('edited:', id); // EventEmitter illustration
  }

  public onDelete(id: number): void {
    this.coursesService
      .getItemById(id)
      .subscribe((course) => this.openDeleteDialog(course));
  }

  openDeleteDialog(course): void {
    const dialogRef = this.dialog.open(DeleteCourseModalComponent, {
      width: '400px',
      data: course,
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) {
        return;
      }

      this.coursesService.deleteItem(course.id).subscribe(() => {
        this.getCourses();

        this.snackBar.open(`Course ${course.title} has been deleted`, 'Close', {
          duration: 5000,
        });
      });
    });
  }

  public loadMore(): void {
    this.coursesCount = this.coursesCount + 3;
    this.getCourses(this.coursesCount, this.coursesCount);
  }

  public searchItems(textFragment): void {
    this.getCourses(0, 3, textFragment);
  }
}
