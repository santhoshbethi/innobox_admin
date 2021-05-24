import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultibandgatewayComponent } from './multibandgateway.component';

describe('MultibandgatewayComponent', () => {
  let component: MultibandgatewayComponent;
  let fixture: ComponentFixture<MultibandgatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultibandgatewayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultibandgatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
