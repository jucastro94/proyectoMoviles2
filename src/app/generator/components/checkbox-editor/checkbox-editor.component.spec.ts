import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxEditorComponent } from './checkbox-editor.component';

describe('CheckboxEditorComponent', () => {
  let component: CheckboxEditorComponent;
  let fixture: ComponentFixture<CheckboxEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxEditorComponent]
    });
    fixture = TestBed.createComponent(CheckboxEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
