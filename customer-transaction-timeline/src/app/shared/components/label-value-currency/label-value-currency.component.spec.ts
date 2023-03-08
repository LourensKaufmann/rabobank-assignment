import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelValueCurrencyComponent } from './label-value-currency.component';

describe('LabelValueCurrencyComponent', () => {
  let component: LabelValueCurrencyComponent;
  let fixture: ComponentFixture<LabelValueCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LabelValueCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelValueCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setting #currencyCode should render that code', () => {
    const currencyCode = '€';
    component.currencyCode = currencyCode;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.innerHTML).toContain(currencyCode);
  })

  it('setting #amount should render that amount', () => {
    const amount = 999;
    component.amount = amount;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.innerHTML).toContain(amount);
  })

  it('setting #amount higher than 999 should render that amount with thousand separators', () => {
    component.amount = 1000;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.innerHTML).toContain('1,000');
  })

  it('setting #showPlusSymbolIfPositive to true should render a + symbol before positive amount', () => {
    component.showPlusSymbolIfPositive = true;
    component.amount = 999;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.innerHTML).toContain('+999');
  })

  it('setting #showPlusSymbolIfPositive to true should render a - symbol before negative amount', () => {
    component.showPlusSymbolIfPositive = true;
    component.amount = -999;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.innerHTML).toContain('-999');
  })

  it('setting #showPlusSymbolIfPositive to false should render a - symbol before negative amount', () => {
    component.showPlusSymbolIfPositive = false;
    component.amount = -999;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.innerHTML).toContain('-999');
  })

  it('setting #amount as a value with more than 2 decimal points should only render 2 decimal points', () => {
    component.amount = 1.1111;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.innerHTML).not.toContain('1.1111');
    expect(fixture.debugElement.nativeElement.innerHTML).toContain('1.11');
  })
});
