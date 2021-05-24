import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestworkComponent } from './latestwork.component';

describe('LatestworkComponent', () => {
  let component: LatestworkComponent;
  let fixture: ComponentFixture<LatestworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
