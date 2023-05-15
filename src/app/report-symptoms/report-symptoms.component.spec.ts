import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSymptomsComponent } from './report-symptoms.component';

describe('ReportSymptomsComponent', () => {
  let component: ReportSymptomsComponent;
  let fixture: ComponentFixture<ReportSymptomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportSymptomsComponent]
    });
    fixture = TestBed.createComponent(ReportSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
