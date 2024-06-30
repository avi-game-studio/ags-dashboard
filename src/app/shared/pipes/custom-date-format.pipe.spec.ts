import { DatePipe } from '@angular/common';
import { CustomDatePipe } from './custom-date-format.pipe';

describe('CustomDateFormatPipe', () => {
  it('create an instance', () => {
    const datePipe = new DatePipe("");
    const pipe = new CustomDatePipe(datePipe);
    expect(pipe).toBeTruthy();
  });
});
