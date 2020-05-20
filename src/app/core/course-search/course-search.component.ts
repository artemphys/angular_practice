import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
})
export class CourseSearchComponent implements OnInit {
  private searchInput = new Subject<string>();
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  public searchInput$ = this.searchInput.asObservable();

  public onChange({ target: { value } }): void {
    if (!value.length) {
      this.searchInput.next('');
      return;
    }

    if (value.length < 3) {
      return;
    }

    this.searchInput.next(value);
  }

  ngOnInit(): void {
    this.searchInput$
      .pipe(debounceTime(1000))
      .subscribe((input) => this.onSearch.emit(input));
  }
}
