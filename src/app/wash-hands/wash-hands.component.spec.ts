import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashHandsComponent } from './wash-hands.component';

describe('WashHandsComponent', () => {
  let component: WashHandsComponent;
  let fixture: ComponentFixture<WashHandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WashHandsComponent]
    });
    fixture = TestBed.createComponent(WashHandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
