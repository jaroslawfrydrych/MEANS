import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsdComponent } from './asd.component';

describe('AsdComponent', () => {
  let component: AsdComponent;
  let fixture: ComponentFixture<AsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
