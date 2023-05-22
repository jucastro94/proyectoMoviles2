import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxViewerComponent } from './checkbox-viewer.component';

describe('CheckboxViewerComponent', () => {
  let component: CheckboxViewerComponent;
  let fixture: ComponentFixture<CheckboxViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxViewerComponent]
    });
    fixture = TestBed.createComponent(CheckboxViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
