import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationtestappComponent } from './automationtestapp.component';

describe('AutomationtestappComponent', () => {
  let component: AutomationtestappComponent;
  let fixture: ComponentFixture<AutomationtestappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomationtestappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationtestappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
