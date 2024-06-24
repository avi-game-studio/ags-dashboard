import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate',
  standalone: true
})
export class CustomDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: any, format: string = 'MMM d, y, h:mm:ss a'): any {
    if (!value) return value;
    return this.datePipe.transform(value, format);
  }

}
