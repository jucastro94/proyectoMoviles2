import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldViewerComponent } from './field-viewer.component';

describe('FieldViewerComponent', () => {
  let component: FieldViewerComponent;
  let fixture: ComponentFixture<FieldViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldViewerComponent]
    });
    fixture = TestBed.createComponent(FieldViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
