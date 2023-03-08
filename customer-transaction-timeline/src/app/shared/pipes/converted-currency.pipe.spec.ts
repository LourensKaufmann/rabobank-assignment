import { ConvertedCurrencyPipe } from './converted-currency.pipe';

describe('ConvertedCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertedCurrencyPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform without #currencyRate returns unchanged #value', () => {
    const pipe = new ConvertedCurrencyPipe();

    const expectedValue = 10;
    const resultValue = pipe.transform(expectedValue, undefined);

    expect(resultValue).toEqual(expectedValue);
  });

  it('transform with #currencyRate returns correct #value', () => {
    const pipe = new ConvertedCurrencyPipe();

    const currencyRate = 0.5;
    const originalValue = 1;
    const expectedValue = 2;
    const resultValue = pipe.transform(originalValue, currencyRate);
    
    expect(resultValue).toEqual(expectedValue);
  });
});
