import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRestrauntComponent } from './upload-restraunt.component';

describe('UploadRestrauntComponent', () => {
  let component: UploadRestrauntComponent;
  let fixture: ComponentFixture<UploadRestrauntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadRestrauntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRestrauntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
