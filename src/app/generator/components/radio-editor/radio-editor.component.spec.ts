import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioEditorComponent } from './radio-editor.component';

describe('RadioEditorComponent', () => {
  let component: RadioEditorComponent;
  let fixture: ComponentFixture<RadioEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioEditorComponent]
    });
    fixture = TestBed.createComponent(RadioEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
