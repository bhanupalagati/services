import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePerdmCalculatorComponent } from './date-perdm-calculator.component';

describe('DatePerdmCalculatorComponent', () => {
  let component: DatePerdmCalculatorComponent;
  let fixture: ComponentFixture<DatePerdmCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePerdmCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePerdmCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
