import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
})
export class CourseSearchComponent implements OnInit {
  @Input() searchValue = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  public handleSearch(): void {
    this.onSearch.emit(this.searchValue);
  }
}
