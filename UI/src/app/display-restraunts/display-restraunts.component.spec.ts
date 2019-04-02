import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRestrauntsComponent } from './display-restraunts.component';

describe('DisplayRestrauntsComponent', () => {
  let component: DisplayRestrauntsComponent;
  let fixture: ComponentFixture<DisplayRestrauntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRestrauntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRestrauntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
