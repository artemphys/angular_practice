import { Component, OnInit, PipeTransform } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/interfaces';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { DeleteCourseModalComponent } from '../delete-course-modal/delete-course-modal.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public items: Course[];
  public searchPipe: PipeTransform = new SearchPipe();
  public orderByPipe: PipeTransform = new OrderByPipe();

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.items = this.getItems();
  }

  private getItems(): Course[] {
    return this.orderByPipe.transform(
      this.coursesService.getList(),
      'creation_date',
      false
    );
  }

  public onEdit(id: string): void {
    const idx = this.items.findIndex((item) => item.id === id);
    const item = this.items[idx];
    this.items[idx] = { ...item, title: `${item.title}(edited)` };
    console.log('edited:', id);
  }

  public onDelete(id: string): void {
    const item = this.coursesService.getItemById(id);

    const dialogRef = this.dialog.open(DeleteCourseModalComponent, {
      width: '400px',
      data: item,
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.coursesService.removeItem(id);
        this.items = this.getItems();

        this.snackBar.open(`Course ${item.title} has been deleted`, 'Close', {
          duration: 5000,
        });
      }
    });
  }

  public loadMore(): void {
    console.log('Load more');
  }

  public searchItems(searchValue): void {
    this.items = this.searchPipe.transform(this.getItems(), searchValue);
  }
}
