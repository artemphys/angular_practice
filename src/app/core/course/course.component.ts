import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/interfaces';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  @Input() item: Course;
  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) {}

  public edit(): void {
    this.onEdit.emit(this.item.id);
    this.router.navigate([`/courses/${this.item.id}`]);
  }

  public delete(): void {
    this.onDelete.emit(this.item.id);
  }
}
