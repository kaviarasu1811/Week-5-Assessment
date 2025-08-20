import { Component } from '@angular/core';
import { Qns5EmployeeService } from '../qns5-employee.service';

@Component({
  selector: 'app-qns6-employee-add',
  templateUrl: './qns6-employee-add.component.html',
  styleUrls: ['./qns6-employee-add.component.css']
})
export class Qns6EmployeeAddComponent {
  employee = {
    code: '',
    name: '',
    gender: '',
    annualSalary: null,
    dateOfBirth: ''
  };

  constructor(private empService: Qns5EmployeeService) {}

  onSubmit() {
    // Add employee via service
    this.empService.addEmployee(this.employee);

    // Clear form
    this.employee = {
      code: '',
      name: '',
      gender: '',
      annualSalary: null,
      dateOfBirth: ''
    };

    alert('Employee added successfully!');
  }
}
