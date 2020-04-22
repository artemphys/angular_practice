import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/interfaces';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public items: Course[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.items = this.coursesService.getAll();
  }

  public onEdit(id: string): void {
    const idx = this.items.findIndex((item) => item.id === id);
    const item = this.items[idx];
    this.items[idx] = { ...item, title: `${item.title}(edited)` };
    console.log('edited:', id);
  }

  public onDelete(id: string): void {
    console.log('deleted:', id);
    this.items = this.items.filter((item) => item.id !== id);
  }

  public loadMore(): void {
    console.log('Load more');
  }
}
