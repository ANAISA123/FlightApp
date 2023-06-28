import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyComponent } from './fly.component';

describe('FlyComponent', () => {
  let component: FlyComponent;
  let fixture: ComponentFixture<FlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlyComponent]
    });
    fixture = TestBed.createComponent(FlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
