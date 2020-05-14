import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/interfaces';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit, OnChanges {
  @Input() item: Course;
  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  public edit(): void {
    this.onEdit.emit(this.item.id);
    this.router.navigate([`/courses/${this.item.id}`]);
  }

  public delete(): void {
    this.onDelete.emit(this.item.id);
  }
}
