import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReaderComponent } from './form-reader.component';

describe('FormReaderComponent', () => {
  let component: FormReaderComponent;
  let fixture: ComponentFixture<FormReaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormReaderComponent]
    });
    fixture = TestBed.createComponent(FormReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
