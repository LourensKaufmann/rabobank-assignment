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
});
