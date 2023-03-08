import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
// TODO