import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(data: object[], field: string, asc: boolean = true): unknown {
    return data.sort((a, b) => {
      const firstDate = asc ? moment(a[field]) : moment(b[field]);
      const secondDate = asc ? moment(b[field]) : moment(a[field]);

      if (firstDate.isAfter(secondDate)) {
        return 1;
      }
      if (firstDate.isBefore(secondDate)) {
        return -1;
      }
      return 0;
    });
  }
}
