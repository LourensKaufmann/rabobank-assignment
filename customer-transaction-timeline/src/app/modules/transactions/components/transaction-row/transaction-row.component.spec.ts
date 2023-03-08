import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { LabelValueCurrencyComponent } from 'src/app/shared/components/label-value-currency/label-value-currency.component';
import { LabelValueTextComponent } from 'src/app/shared/components/label-value-text/label-value-text.component';
import { NavigationButtonComponent } from 'src/app/shared/components/navigation-button/navigation-button.component';
import { ConvertedCurrencyPipe } from 'src/app/shared/pipes/converted-currency.pipe';

import { TransactionRowComponent } from './transaction-row.component';

describe('TransactionRowComponent', () => {
  let component: TransactionRowComponent;
  let fixture: ComponentFixture<TransactionRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionRowComponent],
      imports: [
        LabelValueTextComponent,
        LabelValueCurrencyComponent,
        ConvertedCurrencyPipe,
        NavigationButtonComponent,
      ],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setting name should render that name in the row', () => {
    const name = 'Person A';
    component.name = name;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.innerHTML).toContain(name);
  });

  it('currency amount should always be prefixed with € symbol', () => {
    component.amount = 10;
    fixture.detectChanges();

    const currencyLabelElement = fixture.debugElement.query(
      By.css('app-label-value-currency')
    ).nativeElement;

    expect(currencyLabelElement.innerHTML).toContain('€');
  });

  it('setting name should render that name in the row', () => {
    const to = '/asd';
    component.to = to;
    fixture.detectChanges();

    const navigationButtonAnchorElement = fixture.debugElement.query(
      By.css('app-navigation-button a')
    ).nativeElement;

    expect(navigationButtonAnchorElement.getAttribute('href')).toBe(to);
  });
});
