import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioViewerComponent } from './radio-viewer.component';

describe('RadioViewerComponent', () => {
  let component: RadioViewerComponent;
  let fixture: ComponentFixture<RadioViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioViewerComponent]
    });
    fixture = TestBed.createComponent(RadioViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
