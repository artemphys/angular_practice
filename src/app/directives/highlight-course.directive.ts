import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appHighlightCourse]',
})
export class HighlightCourseDirective implements OnInit {
  @Input('appHighlightCourse') public date: string;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.setBorder();
  }

  private setBorder(): void {
    const today = moment();
    const creationDate = moment(this.date);
    const twoWeeksBefore = moment().subtract(14, 'days');

    if (creationDate.isAfter(today)) {
      this.element.nativeElement.style.border = '1px solid #2bc0ed';
    } else if (creationDate.isSameOrAfter(twoWeeksBefore)) {
      this.element.nativeElement.style.border = '1px solid #7ef693';
    }
  }
}
