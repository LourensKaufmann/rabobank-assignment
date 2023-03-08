import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelValueTimeonlyComponent } from './label-value-timeonly.component';

describe('LabelValueTimeonlyComponent', () => {
  let component: LabelValueTimeonlyComponent;
  let fixture: ComponentFixture<LabelValueTimeonlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LabelValueTimeonlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelValueTimeonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// TODO