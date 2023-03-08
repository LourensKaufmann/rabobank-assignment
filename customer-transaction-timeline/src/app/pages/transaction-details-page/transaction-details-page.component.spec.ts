import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TransactionDetailsPageComponent } from './transaction-details-page.component';

describe('TransactionDetailsPageComponent', () => {
  let component: TransactionDetailsPageComponent;
  let fixture: ComponentFixture<TransactionDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TransactionDetailsPageComponent ],
      providers: [ provideHttpClient(), provideRouter([]) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// TODO