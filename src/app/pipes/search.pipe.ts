import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(data: Course[], searchStr: string): Course[] {
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchStr.toLowerCase())
    );
  }
}
