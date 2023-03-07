import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelPropertyComponent } from './label-property.component';

describe('LabelPropertyComponent', () => {
  let component: LabelPropertyComponent;
  let fixture: ComponentFixture<LabelPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LabelPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
