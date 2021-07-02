import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalktoourexpertComponent } from './talktoourexpert.component';

describe('TalktoourexpertComponent', () => {
  let component: TalktoourexpertComponent;
  let fixture: ComponentFixture<TalktoourexpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalktoourexpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalktoourexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
