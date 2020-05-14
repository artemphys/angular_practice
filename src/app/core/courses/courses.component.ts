import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/interfaces';
import { DeleteCourseModalComponent } from '../delete-course-modal/delete-course-modal.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public items: Observable<Course[]>;
  public coursesCount: number = 3;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.items = this.coursesService.getList();
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
        this.items = this.coursesService.getList();

        this.snackBar.open(`Course ${course.title} has been deleted`, 'Close', {
          duration: 5000,
        });
      });
    });
  }

  public loadMore(): void {
    this.coursesCount = this.coursesCount + 3;
    this.items = this.coursesService.getList(
      this.coursesCount,
      this.coursesCount
    );
  }

  public searchItems(textFragment): void {
    this.items = this.coursesService.getList(0, 3, textFragment);
  }
}
