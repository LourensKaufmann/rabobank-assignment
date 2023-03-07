import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelValueDateonlyComponent } from './label-value-dateonly.component';

describe('LabelValueDateonlyComponent', () => {
  let component: LabelValueDateonlyComponent;
  let fixture: ComponentFixture<LabelValueDateonlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LabelValueDateonlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelValueDateonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
