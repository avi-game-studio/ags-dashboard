import { CustomCurrencyPipe } from './custom-currency.pipe';
import { CurrencyPipe } from '@angular/common';

describe('CustomCurrencyPipe', () => {
  it('create an instance', () => {
    const currencyPipe = new CurrencyPipe("en-US");
    const pipe = new CustomCurrencyPipe(currencyPipe);
    expect(pipe).toBeTruthy();
  });
  it('testing transform method', () => {
    const pipe = new CustomCurrencyPipe(new CurrencyPipe("en-US"));
    let checklist = [
      [100, "₹100.00"],
      [null, null],
      [99, "₹99.00"],
      [899, "₹899.00"],
      [2000, "₹2,000.00"],
      [1999, "₹1,999.00"],
    ];
    checklist.forEach(list => {
      let input: any;
      let output: any;
      input = list[0];
      output = list[1];
      const result = pipe.transform(input);
      expect(result).toEqual(output);
    });
  });
});
