import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeManageComponent } from './bike-manage.component';

describe('BikeManageComponent', () => {
  let component: BikeManageComponent;
  let fixture: ComponentFixture<BikeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
