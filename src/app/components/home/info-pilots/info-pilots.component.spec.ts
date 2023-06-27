import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPilotsComponent } from './info-pilots.component';

describe('InfoPilotsComponent', () => {
  let component: InfoPilotsComponent;
  let fixture: ComponentFixture<InfoPilotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPilotsComponent]
    });
    fixture = TestBed.createComponent(InfoPilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
