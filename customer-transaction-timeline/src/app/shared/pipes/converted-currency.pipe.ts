import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertedCurrency',
  standalone: true
})
export class ConvertedCurrencyPipe implements PipeTransform {

  transform(value: number, currencyRate?: number): number {
    return currencyRate ? value / currencyRate : value;
  }

}
