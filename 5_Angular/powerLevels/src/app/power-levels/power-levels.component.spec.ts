import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerLevelsComponent } from './power-levels.component';

describe('PowerLevelsComponent', () => {
  let component: PowerLevelsComponent;
  let fixture: ComponentFixture<PowerLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
