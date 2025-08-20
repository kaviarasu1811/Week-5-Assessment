import { Component } from '@angular/core';

@Component({
  selector: 'app-qns7-no-records',
  templateUrl: './qns7-no-records.component.html',
  styleUrls: ['./qns7-no-records.component.css']
})
export class Qns7NoRecordsComponent {
  employees: any[] = [];  // Start with empty array to trigger message

  // You can toggle employees to test
  // employees: any[] = [
  //   { code: 'emp101', name: 'karthik', gender: 'Male', annualSalary: 5500, dateOfBirth: '1988-06-25' },
  // ];
}
