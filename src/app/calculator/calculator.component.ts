import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  inputData;
  previousNum;
  result;

  constructor() { }

  ngOnInit(): void {
    this.inputData = "";
    this.previousNum = "";
  }
  AllClr() {
    this.clr();
    this.result = "";
  }
  clr() {
    this.inputData = "";
    this.previousNum = "";
  }

  // Append each digit to individual numbers
  operand(num) {
    if (num == ".") {
      if (this.inputData != "") {
        if (!this.previousNum.includes('.')) {
          this.inputData += '.';
          this.previousNum += '.';
        }
      }
    }
    else {
      this.inputData += num;
      this.previousNum += num;
    }
  }

  // Append previous number to complete sequence, then append operator
  operator(op) {
    if (op == '+' || op == '-' || op == '*' || op == '/') {
      if (this.inputData != "") {
        if (!['+', '-', '*', '/'].includes(this.inputData.charAt(this.inputData.length - 1))) {
          this.inputData += op;
          this.previousNum = "";
        }
      }
    }
  }
  equate() {
    this.result = eval(this.inputData);
    this.clr();
  }

}
