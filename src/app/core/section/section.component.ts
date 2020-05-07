import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public handleSearch(searchValue: string): void {
    this.onSearch.emit(searchValue);
  }

  public addCourse(): void {
    this.router.navigate(['/courses/new']);
  }
}
