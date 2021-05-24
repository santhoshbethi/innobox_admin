import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityiotComponent } from './securityiot.component';

describe('SecurityiotComponent', () => {
  let component: SecurityiotComponent;
  let fixture: ComponentFixture<SecurityiotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityiotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityiotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
