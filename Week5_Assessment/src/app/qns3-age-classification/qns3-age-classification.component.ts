import { Component } from '@angular/core';

@Component({
  selector: 'app-qns3-age-classification',
  templateUrl: './qns3-age-classification.component.html',
  styleUrls: ['./qns3-age-classification.component.css']
})
export class Qns3AgeClassificationComponent {
  name: string = '';
  age: number | null = null;

  getGreeting(): string {
    if (this.age === null || this.age === undefined) {
      return '';
    }

    if (this.age < 13) {
      return `Hello ${this.name}, you are child`;
    } else if (this.age >= 13 && this.age <= 19) {
      return `Hello ${this.name}, you are teenager`;
    } else {
      return `Hello ${this.name}, you are an adult`;
    }
  }
}
