import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCircleComponent } from './button-circle.component';

describe('ButtonCircleComponent', () => {
  let component: ButtonCircleComponent;
  let fixture: ComponentFixture<ButtonCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
