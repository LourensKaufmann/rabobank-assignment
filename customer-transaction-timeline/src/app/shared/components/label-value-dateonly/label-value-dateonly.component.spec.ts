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

  it('setting #dateString should render formatted date with format dd/MM/yyy', () => {
    component.dateString = "2022-11-06";
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.innerHTML).toContain('06/11/2022');
  });
});
