import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelValueTextComponent } from './label-value-text.component';

describe('LabelValueTextComponent', () => {
  let component: LabelValueTextComponent;
  let fixture: ComponentFixture<LabelValueTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LabelValueTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelValueTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// TODO