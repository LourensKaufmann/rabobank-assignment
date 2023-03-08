import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGridComponent } from './key-value-grid.component';

describe('DetailsGridComponent', () => {
  let component: DetailsGridComponent;
  let fixture: ComponentFixture<DetailsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DetailsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
