import { HighlightCourseDirective } from './highlight-course.directive';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import * as moment from 'moment';

import { CourseComponent } from '../core/course/course.component';
import { DurationPipe } from '../pipes/duration.pipe';

const ITEM_MOCK = {
  id: '1',
  title: 'Python Programming Bootcamp',
  description:
    'A Complete Python Course Focused on Problem Solving that will Expand into All Python Can Do',
  creation_date: moment().toString(),
  duration: 290,
  topRated: false,
  authors: '',
};

describe('HighlightCourseDirective', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent, DurationPipe, HighlightCourseDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.item = { ...ITEM_MOCK };
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have green border if creation_date >= current day - 14 days', () => {
    const item = fixture.debugElement.queryAll(By.css('.item'))[0];
    expect(item.styles.border).toBe('1px solid rgb(126, 246, 147)');
  });

  it('should have blue border if creation_date > current day', () => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.item = {
      ...ITEM_MOCK,
      creation_date: moment().add(1, 'd').toString(),
    };
    fixture.detectChanges();

    const item = fixture.debugElement.queryAll(By.css('.item'))[0];
    expect(item.styles.border).toBe('1px solid rgb(43, 192, 237)');
  });

  it('should have no border if creation_date < current day - 14 days', () => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.item = {
      ...ITEM_MOCK,
      creation_date: moment().subtract(15, 'd').toString(),
    };
    fixture.detectChanges();

    const item = fixture.debugElement.queryAll(By.css('.item'))[0];
    expect(item.styles.border).toBe('');
  });
});
