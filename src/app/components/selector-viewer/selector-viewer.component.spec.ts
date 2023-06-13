import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorViewerComponent } from './selector-viewer.component';

describe('SelectorViewerComponent', () => {
  let component: SelectorViewerComponent;
  let fixture: ComponentFixture<SelectorViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorViewerComponent]
    });
    fixture = TestBed.createComponent(SelectorViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
