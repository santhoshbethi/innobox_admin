import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskforqouteComponent } from './askforqoute.component';

describe('AskforqouteComponent', () => {
  let component: AskforqouteComponent;
  let fixture: ComponentFixture<AskforqouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskforqouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskforqouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
