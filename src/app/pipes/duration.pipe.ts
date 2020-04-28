import { Pipe, PipeTransform } from '@angular/core';
import { HOUR } from 'src/app/constants';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(data: number): string {
    if (data < 0) {
      return '';
    }

    if (data < HOUR) {
      return `${data}min`;
    }

    const hours = Math.floor(data / HOUR);
    const min = data % HOUR;

    return min > 0 ? `${hours}h ${min}min` : `${hours}h`;
  }
}
