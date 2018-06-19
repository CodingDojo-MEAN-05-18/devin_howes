import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanComponentComponent } from './human-component.component';

describe('HumanComponentComponent', () => {
  let component: HumanComponentComponent;
  let fixture: ComponentFixture<HumanComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
