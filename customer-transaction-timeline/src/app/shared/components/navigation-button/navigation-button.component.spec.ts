import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { NavigationButtonComponent } from './navigation-button.component';

describe('NavigationButtonComponent', () => {
  let component: NavigationButtonComponent;
  let fixture: ComponentFixture<NavigationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NavigationButtonComponent ],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setting to should render anchor element with correct href', () => {
    component.to = "/asd";
    fixture.detectChanges();

    const anchorElement = fixture.debugElement.query(By.css('a')).nativeElement;
    
    expect(anchorElement.getAttribute('href')).toBe('/asd');
  });
});
