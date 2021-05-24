import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiotplatformComponent } from './indiotplatform.component';

describe('IndiotplatformComponent', () => {
  let component: IndiotplatformComponent;
  let fixture: ComponentFixture<IndiotplatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiotplatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiotplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
