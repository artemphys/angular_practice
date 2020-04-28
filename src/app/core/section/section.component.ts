import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  public handleSearch(searchValue: string): void {
    this.onSearch.emit(searchValue);
  }
}
