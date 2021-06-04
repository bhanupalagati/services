import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-date-perdm-calculator',
  templateUrl: './date-perdm-calculator.component.html',
  styleUrls: ['./date-perdm-calculator.component.scss']
})
export class DatePerdmCalculatorComponent implements OnInit {
  calculatePressed = false;
  allowCalculate = false;
  finalres = 0;
  fifteenthDay = undefined;
  formgroup = new FormGroup({
    perDMAmount: new FormControl(1),
    otherAmount: new FormControl(1)
  });

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
    combineLatest(this.formgroup.valueChanges, this.range.valueChanges).subscribe(([formData, date]) => {
      this.calculatePressed = false;
      if(formData.perDMAmount && formData.otherAmount && date.start && date.end) {
        this.allowCalculate = true;
      }
    });
  }

  calculate() {
    this.calculatePressed = true;
    this.allowCalculate = false;
    this.fifteenthDay = new Date(this.range.value.start);
    this.fifteenthDay.setDate(this.fifteenthDay.getDate() + 15);
    let perDiem = (15 - Math.ceil(((new Date(this.range.value.end).getTime() - new Date(this.range.value.start).getTime()))/86400000))*parseFloat(this.formgroup.value.perDMAmount);
    perDiem = perDiem > 0 ? perDiem : 0;
    this.finalres = perDiem + parseFloat(this.formgroup.value.otherAmount);
    
  }

}
