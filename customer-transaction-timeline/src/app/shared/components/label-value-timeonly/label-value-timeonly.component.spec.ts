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

  it('setting #dateString should render formatted time with format h:mm:ss a', () => {
    component.dateString = '2022-11-08T10:30:47.123456';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.innerHTML).toContain('10:30:47 AM');
  });

});
