import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbienceDesinfectionComponent } from './ambience-desinfection.component';

describe('AmbienceDesinfectionComponent', () => {
  let component: AmbienceDesinfectionComponent;
  let fixture: ComponentFixture<AmbienceDesinfectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmbienceDesinfectionComponent]
    });
    fixture = TestBed.createComponent(AmbienceDesinfectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
