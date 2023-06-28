import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightHoursComponent } from './flight-hours.component';

describe('FlightHoursComponent', () => {
  let component: FlightHoursComponent;
  let fixture: ComponentFixture<FlightHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightHoursComponent]
    });
    fixture = TestBed.createComponent(FlightHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
