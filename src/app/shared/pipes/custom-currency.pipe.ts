import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'customCurrency',
  standalone: true
})
export class CustomCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) { }

  transform(value: number, currencyCode: string = 'INR', display: string | boolean = 'symbol', digitsInfo?: string, locale?: string): string | null {
    if (value == null) {
      return null;
    }

    const formattedCurrency = this.currencyPipe.transform(value, currencyCode, display, digitsInfo, locale);

    return formattedCurrency ? `${formattedCurrency}` : null;
  }
}
