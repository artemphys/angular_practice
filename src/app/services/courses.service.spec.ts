import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get course by ID', () => {
    const item = service.getItemById('1');
    expect(item.id).toBe('1');
  });

  it('should update course', () => {
    const item = service.data[0];
    service.updateItem({ ...item, title: 'test' });
    expect(service.data[0].title).toBe('test');
  });

  it('should delete course by ID', () => {
    service.removeItem('3');
    expect(service.data.length).toBe(2);
  });
});
