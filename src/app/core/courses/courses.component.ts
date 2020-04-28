import { Component, OnInit, PipeTransform } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/interfaces';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public items: Course[];
  public searchPipe: PipeTransform = new SearchPipe();
  public orderByPipe: PipeTransform = new OrderByPipe();

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.items = this.getItems();
  }

  private getItems(): Course[] {
    return this.orderByPipe.transform(
      this.coursesService.getAll(),
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
    console.log('deleted:', id);
    this.items = this.items.filter((item) => item.id !== id);
  }

  public loadMore(): void {
    console.log('Load more');
  }

  public searchItems(searchValue): void {
    this.items = this.searchPipe.transform(this.getItems(), searchValue);
  }
}
